using LabOnline.Integration.Interfaces;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace LabOnline.Integration.Services
{
    public class CleanService: ICleanService
    {
        private bool _isBusy;
        private string _purgeFolder;
        private int _cleanDays = 1;
        private List<string> _errors;

        /// <summary>
        /// Indicates if the service is busy
        /// </summary>
        public bool IsBusy
        {
            get { return _isBusy; }
        }

        /// <summary>
        /// Indicates the errors in las execution
        /// </summary>
        public List<string> Errors
        {
            get { return _errors; }
        }

        /// <summary>
        /// Initial configuration
        /// </summary>
        /// <param name="folderPath"></param>
        /// <param name="cleanDays"></param>
        public CleanService(string folderPath, int cleanDays = 1)
        {
            _purgeFolder = folderPath ?? string.Empty;
            _cleanDays = cleanDays;
        }

        /// <summary>
        /// Perform the clean file operations
        /// </summary>
        /// <param name="folderPath"></param>
        /// <param name="cleanDays"></param>
        /// <returns></returns>
        public bool Execute()
        {
            _isBusy = true;
            _errors = new List<string>();

            if(IsValid())
            {
                Directory.GetFiles(_purgeFolder)
                    .ToList()
                    .ForEach(fileName => DeleteFile(fileName));
            }

            _isBusy = false;
            return _errors.Count == 0;
        }

        /// <summary>
        /// Validate the conditions to process que request
        /// </summary>
        /// <param name="folderPath"></param>
        /// <param name="errors"></param>
        private bool IsValid()
        {
            if (string.IsNullOrEmpty(_purgeFolder))
            {
                _errors.Add("No esta definida la ruta de los documentos en el app.config");
            }
            if (!Directory.Exists(_purgeFolder))
            {
                _errors.Add($"La ruta '{_purgeFolder}' no es válida");
            }
            return _errors.Count == 0;
        }

        /// <summary>
        /// Delete the old files
        /// </summary>
        /// <param name="fileName"></param>
        /// <param name="errors"></param>
        /// <param name="cleanDays"></param>
        private void DeleteFile(string fileName)
        {
            if (!File.Exists(fileName ?? string.Empty))
            {
                return;
            }

            try
            {
                FileInfo file = new FileInfo(fileName);
                var creationTime = file.LastWriteTime;
                var purgeTime = DateTime.Now.AddDays(-_cleanDays);

                if (creationTime < purgeTime)
                    file.Delete();
            }
            catch (Exception ex)
            {
                _errors.Add($"{fileName} :: {ex.Message}");
            }
        }
    }
}
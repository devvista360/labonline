using System.Text.RegularExpressions;

namespace LabOnline.Business.Services
{
    /// <summary>
    /// Methods to remove HTML from strings.
    /// https://www.dotnetperls.com/remove-html-tags
    /// </summary>
    public class HtmlRemovalService
    {
        /// <summary>
        /// Remove HTML from string with Regex.
        /// </summary>
        public string RemoveHtmlTagsRegex(string source)
        {
            return Regex.Replace(source, "<.*?>", string.Empty);
        }

        /// <summary>
        /// Compiled regular expression for performance.
        /// </summary>
        Regex _htmlRegex = new Regex("<.*?>", RegexOptions.Compiled);

        /// <summary>
        /// Remove HTML from string with compiled Regex.
        /// </summary>
        public string RemoveHtmlTagsRegexCompiled(string source)
        {
            return _htmlRegex.Replace(source, string.Empty);
        }

        /// <summary>
        /// Remove HTML tags from string using char array.
        /// </summary>
        public string RemoveHtmlTagsCharArray(string source)
        {
            char[] array = new char[source.Length];
            int arrayIndex = 0;
            bool inside = false;

            for (int index = 0; index < source.Length; index++)
            {
                char let = source[index];
                if (let == '<')
                {
                    inside = true;
                    continue;
                }
                if (let == '>')
                {
                    inside = false;
                    continue;
                }
                if (!inside)
                {
                    array[arrayIndex] = let;
                    arrayIndex++;
                }
            }
            return new string(array, 0, arrayIndex);
        }
    }
}

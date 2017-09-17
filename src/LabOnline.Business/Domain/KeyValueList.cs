using System.Collections.Generic;

namespace LabOnline.Business.Domain
{
    /// <summary>
    /// Subclass to enable object initializers for a list of key value pairs
    /// </summary>
    /// <typeparam name="TKey">Key defined type</typeparam>
    /// <typeparam name="TValue">Value defined type</typeparam>
    public class KeyValueList<TKey, TValue> : List<KeyValuePair<TKey, TValue>>
    {
        /// <summary>
        /// Add a new item to the list
        /// </summary>
        /// <param name="key">Item key</param>
        /// <param name="value">Item value</param>
        public void Add(TKey key, TValue value)
        {
            Add(new KeyValuePair<TKey, TValue>(key, value));
        }
    }
}

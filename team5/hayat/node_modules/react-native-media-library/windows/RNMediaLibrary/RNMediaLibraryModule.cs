using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Media.Library.RNMediaLibrary
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNMediaLibraryModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNMediaLibraryModule"/>.
        /// </summary>
        internal RNMediaLibraryModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNMediaLibrary";
            }
        }
    }
}

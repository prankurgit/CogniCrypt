/**
 * Copyright 2015-2017 Technische Universitaet Darmstadt
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @author Ram
 *
 */
package crossing.e1.configurator.utilities;

import java.io.FileInputStream;
import java.util.Properties;

import crossing.e1.configurator.Activator;

public class PropertiesFileReader {

	private final Properties prop = new Properties();

	public PropertiesFileReader(final String path) {
		try {
			this.prop.load(new FileInputStream(Utils.getResourceFromWithin(path)));
		} catch (final Exception ex) {
			Activator.getDefault().logError(ex);
		}
	}

	public Properties getProperties() {
		return this.prop;
	}

}
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
package crossing.e1.featuremodel.clafer;

import java.util.Objects;

import org.clafer.instance.InstanceClafer;

import crossing.e1.configurator.Constants;

/**
 * @author Ram InstanceClaferHash extends InstanceClafer by overriding only hashCode method
 */
public class InstanceClaferHash extends InstanceClafer {

	public InstanceClaferHash(final InstanceClafer inputInstance) {
		super(inputInstance.getType(), inputInstance.getId(), inputInstance.getRef(), inputInstance.getChildren());
	}

	public int getHashCode() {
		/**
		 * Method calculates hash for all the children and ORs it with hashcode for ID ,Type and Ref
		 */
		int hashToChildrenInstances = 0;
		for (final InstanceClafer childInstanceClafer : this.getChildren()) {
			InstanceClaferHash tempInstanceHash = null;
			if (childInstanceClafer
				.hasRef() && !childInstanceClafer.getType().isPrimitive() && !childInstanceClafer.getRef().getClass().toString().contains(Constants.INTEGER) && !childInstanceClafer
					.getRef().getClass().toString().contains(Constants.STRING) && !childInstanceClafer.getRef().getClass().toString().contains(Constants.BOOLEAN)) {
				/**
				 * recursively find hashcode for all the children for a clafer if it is not primitive
				 */
				tempInstanceHash = new InstanceClaferHash((InstanceClafer) childInstanceClafer.getRef());
				if (tempInstanceHash != null) {
					hashToChildrenInstances += tempInstanceHash.getHashCode();
				}
				/**
				 * add hashcode from standard object.hasCode() method for primitive types
				 */
				if (childInstanceClafer.getRef().getClass().toString().contains(Constants.INTEGER) || childInstanceClafer.getRef().getClass().toString()
					.contains(Constants.STRING) || childInstanceClafer.getRef().getClass().toString().contains(Constants.BOOLEAN)) {
					hashToChildrenInstances += childInstanceClafer.getRef().hashCode();
				}
			}
		}
		return getType().hashCode() ^ getId() ^ hashToChildrenInstances ^ Objects.hash(getRef());
	}

	/**
	 * Iterates through individual instanceClafer values and summed value is ORed with hash value of id,ref and type.
	 */
	@Override
	public int hashCode() {
		return getHashCode();
	}
}

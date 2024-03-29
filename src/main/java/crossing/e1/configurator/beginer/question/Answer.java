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
package crossing.e1.configurator.beginer.question;

import java.util.ArrayList;

public class Answer {

	private String value;
	private Boolean defaultAnswer;
	private ArrayList<ClaferDependency> claferDependencies;
	private ArrayList<CodeDependency> codeDependencies;
	private int nextID = -2;

	public ArrayList<ClaferDependency> getClaferDependencies() {
		return this.claferDependencies;
	}

	public ArrayList<CodeDependency> getCodeDependencies() {
		return this.codeDependencies;
	}

	public int getNextID() {
		return this.nextID;
	}

	public String getValue() {
		return this.value;
	}

	public Boolean isDefaultAnswer() {
		return this.defaultAnswer == null ? false : this.defaultAnswer;
	}

	public void setClaferDependencies(final ArrayList<ClaferDependency> claferDependencies) {
		this.claferDependencies = claferDependencies;
	}

	public void setCodeDependencies(final ArrayList<CodeDependency> codeDependencies) {
		this.codeDependencies = codeDependencies;
	}

	public void setDefaultAnswer(final Boolean defaultAnswer) {
		this.defaultAnswer = defaultAnswer;
	}

	public void setNextID(final int prevID) {
		this.nextID = prevID;
	}

	public void setValue(final String value) {
		this.value = value;
	}

	@Override
	public String toString() {
		//the combo viewer calls the toString() method so just display the value
		return this.value;
	}

}

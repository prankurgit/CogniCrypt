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

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import crossing.e1.configurator.Activator;
import crossing.e1.configurator.tasks.Task;
import crossing.e1.configurator.utilities.Utils;

/**
 * This class reads all questions and answers of one task.
 * 
 * @author Sarah Nadi
 *
 */
public class QuestionsJSONReader {

	//Test method so that OpenCCE does not have to be started.
	public static void main(final String args[]) {
		final QuestionsJSONReader reader = new QuestionsJSONReader();
		System.out.println(reader.getQuestions("src/main/resources/testFiles/TestQuestions0.json"));
	}

	private List<Question> questions;

	private void checkReadQuestions() {
		final Set<Integer> ids = new HashSet<>();
		for (final Question question : this.questions) {
			if (!ids.add(question.getId())) {
				throw new IllegalArgumentException("Each question must have a unique ID.");
			}

			if (question.getDefaultAnswer() == null) {
				throw new IllegalArgumentException("Each question must have a default answer.");
			}

			for (final Answer answer : question.getAnswers()) {
				if (answer.getNextID() == -2) {
					throw new IllegalArgumentException("Each answer must point to the following question.");
				}
			}
		}
	}

	/***
	 * This method reads all questions of one task using the file path to the question file.
	 * 
	 * @param filePath
	 *        path to the file that contains all questions for one task.
	 * @return questions
	 */
	public List<Question> getQuestions(final String filePath) {
		try {
			final BufferedReader reader = new BufferedReader(new FileReader(Utils.getResourceFromWithin(filePath)));
			final Gson gson = new Gson();

			this.questions = gson.fromJson(reader, new TypeToken<List<Question>>() {}.getType());

			checkReadQuestions();
		} catch (final FileNotFoundException e) {
			Activator.getDefault().logError(e);
		}

		return this.questions;
	}

	/***
	 * This method reads all questions of one task.
	 * 
	 * @param task
	 *        task whose questions should be read
	 * @return Questions
	 */
	public List<Question> getQuestions(final Task task) {
		return getQuestions(task.getXmlFile());
	}
}

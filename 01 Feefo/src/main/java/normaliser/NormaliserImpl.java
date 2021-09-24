package normaliser;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class NormaliserImpl implements Normaliser {
    private static final String[] JOB_TITLES = new String[]{"Architect", "Software engineer", "Quantity surveyor", "Accountant"};

    /**
     * Search by given input for match in the array of job titles and returns value closest to the corresponding value in the array based on quality match
     * @param input the job title to be normalised
     * @return the normalised job title or empty String
     */
    @Override
    public String normalise(String input) {
        if (input == null) {
            return "";
        }

        double highestQ = 0.0;
        String jobHighestQ = "";
        for (String jobTitle : JOB_TITLES) {
            double q = 0.0;
            String[] jobWordsArr = jobTitle.split(" ");
            double partition = 1.0 / input.split(" ").length;
            for (String s : jobWordsArr) {
                if (isContain(input, s )) {
                    q += partition;
                }

                if (q > highestQ) {
                    highestQ = q;
                    jobHighestQ= jobTitle;
                }

            }

        }

        return jobHighestQ;
    }

    /**
     * Method check if subItem word is contained inside a source text
     * @param source to search in for the subItem
     * @param subItem
     * @return
     */
    private boolean isContain(String source, String subItem){
        String pattern = "\\b"+subItem+"\\b";
        Pattern p=Pattern.compile(pattern);
        Matcher m=p.matcher(source);
        return m.find();
    }

}

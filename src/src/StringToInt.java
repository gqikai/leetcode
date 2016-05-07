/**
 * Created by gaoqikai on 5/7/16.
 */
public class StringToInt {
    public static void main(String[] args) {
        try{
            System.out.println(StringToInt("43434343423434432434234"));
        }catch (Exception e){
            e.printStackTrace();
        }

    }
    public static int StringToInt(String str) throws Exception {

        if(str != null){
            int result = 0;
            Boolean isNegative = false;
            for(int i = 0; i < str.length() ; i ++){
                if(isNum(str.charAt(i))){
                    result = result * 10  + (str.charAt(i) - '0');
                }else if(i == 0 && str.charAt(i) == '-'){
                    isNegative = true;
                }else{
                    throw new Exception("must be a num");
                }
            }
            return isNegative? -result: result;
        }else{
            throw new Exception("null");
        }
    }

    public static Boolean isNum(char c){
        if(c >= '0' && c <= '9'){
            return true;
        }else{
            return false;
        }
    }
}

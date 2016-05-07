
public class ArraySearch {
    public static void main(String[] args) {
        int[][] arr = {{1,2,8,9},{2,4,9,12},{4,7,10,13},{6,8,11,15}};
        System.out.println(SearchArray(arr,11));
    }

    public static Boolean SearchArrayBad(int[][] arr,int n){
        int rows = arr.length;
        int columns = arr[1].length;
        for(int i = columns - 1; i >= 0; i --){
            if(arr[0][i] <= n){
                for(int j = 0; j < rows; j ++){
                    if(arr[j][i] >= n){
                        for(int x = 0; x <= i; x ++){
                            if(arr[j][x] == n) {
                                System.out.println(j + "," + i + "," + x);
                                return true;
                            }
                        }
                    }
                }
            }
        }
        return false;
    }

    public static Boolean SearchArray(int[][] arr,int n){
        int rows = arr.length;
        int columns = arr[1].length;
        int i = 0,j = columns - 1;
        while(i < rows && j > 0){
            if(arr[i][j] == n){
                System.out.println(i + "," + j);
                return true;
            }else if(arr[i][j] > n){
                j --;
            }else{
                i ++;
            }
        }
        return false;
    }
}

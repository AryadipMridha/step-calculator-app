n1=array1.length();
n1=array2.length();
if(n1==n2){
    if(array1[i] <array2[j]) {
    array1[i++]);}
    else if (array1[i] > array2[j]) {
    array2[j++]}
    else {   
       i++;
       j++;
    }
 }
 while(i < n1 && array1[i]!=array2[j]){
    array1[i++];
    answer++}
 while(j < n2 && array2[j]!=array1[i]) {
     array2[j++];
     answer++;}


}
}
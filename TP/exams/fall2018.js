function p1{
    data = document.f1.ta1.value; //retrieves data from the form
    theRows = data.split("#");
    maxStores = -1;
    sum = 0; //to find the average we will add onto this sum
    os = <table border = '1'>;

the for loop creates the 100 rows  

    for (i =0; i < theRows.length; i++) {/* the for loop creates the 100 rows   */}
    {
        theCells = theRows[i].split(","); //splitting the array further to make 500 individual elements, when before it was 100 elements
        os += "<tr>" ;
        
        
        for(j = 0; j < theCells.length; j++) //creates the cells for every row
        {
        
            
            
                os + = "<td>" + theCells[j] + "</td>";  //each element in theCell array will be put onto it's own cell
        }

        if(parseInt(theCells[4]) !== "N.A") //this will check if the number of stores cells have N/A
            {
                if(parseInt(theCells[4]) > maxStores) //arranging the stores from greatest number of stores to lowest
                {
                    maxStores = theCells[4];
                    maxStorename = theCells[1];
                    
                }
            }

            sum = sum + parseFloat(theCells[2]); //has yhe sum 
        os += "</tr>"
    } 
    
    
    
   os += "</table>";

   average = sum/100;
   os = os + "<br><center> Average sales: " + average;
   os  = os + "<br> most stores " + maxStores + " has " + maxStoreName;

   p1_out.innerHTML = os + 
}
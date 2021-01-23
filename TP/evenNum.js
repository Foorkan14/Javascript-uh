evenOnly = [8, 3, 10, 7, 12, 5, 18];
evenSum = 0;
evenNums = 0;

for(i = 0; i < evenOnly.length; i++)
{
    if(evenOnly[i] % 2 === 0)
    {
        
        evenNums = evenSum+=evenOnly[i];
        console.log(evenNums);
        return evenNums;
        
    }
}

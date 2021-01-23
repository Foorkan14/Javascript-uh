let Numberarray = [1, 3, 5];
function doubleArray(arr)
{
    for (let i = 0; i <= arr.length; i++)
    {
        let doubleArray = [arr.push(i)];
        console.log(doubleArray);
    }
}

doubleArray(Numberarray);
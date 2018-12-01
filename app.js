window.onload = init;

// initialize the app
function init() {
    
    let pascalBtn = document.getElementById('pascalBtn');
    var resetBtn = document.getElementById('resetBtn');
    let numberInput = document.getElementById('pascalNumber');
    pascalBtn.addEventListener('click', generateNumbers);
    resetBtn.addEventListener('click', reset);
     numberInput.addEventListener('input', reset );
};

function reset(){
    //let resetBtn = document.getElementById('resetBtn');
    let pascalTrialgleDisplay = document.getElementsById('result')[0];
    let numberInput = document.getElementById('pascalNumber')[0];
        pascalTrialgleDisplay.innerHTML = '';
        numberInput.innerHTML='';
    }
    //Rendering to display each number generated in a box
            function pascalTriangle(){
                document.getElementById("result").innerHTML = "";
                //This will get the input vallue of number of pascal triangle rows to be generated
                let rows = document.getElementById("pascalNumber").value;
                let arr = pt(rows);// copy the result generated from from pt function into variable arr
                for(let i=0;i<arr.length;i++){
                     let div = document.createElement('div');
                    div.className ="divblock"
                    for(let j=0;j<arr[i].length;j++){
                        let span = document.createElement('span');
                        span.innerHTML=arr[i][j];
                        span.className ="block";
                        div.appendChild(span);
                    }
                    document.getElementById("result").appendChild(div);
                }
            }
            // function generatePascal(n){
            //    let arr = [];
            //     let tmp;
            //     for(let i=0;i<n;i++){
            //         arr[i]=[];
            //         for(let j=0; j<=i; j++){
            //             if(j==i){
            //                 arr[i].push(1);
            //             }else{
            //                 tmp = (!!arr[i-1][j-1]?arr[i-1][j-1]:0)+(!!arr[i-1][j]?arr[i-1][j]:0);
            //                 arr[i].push(tmp);
            //             }
            //         }
            //     }
            //     return arr;
            // }
            function pt(depth){
    let level = depth-1;
    let arr = [1];
    //let result = [[1]];
    let result = [arr];
    
    while(level > 0){
      //this will copy an existing array by value
      //map return an array
      //map key
    
        arr=[1,...arr.map((e,i,a) => (e+a[i+1]) || 1)];
        result.push(arr);
        level-=1;
    }
return result;

}


 
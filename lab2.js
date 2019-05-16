(function (){
    var Module = {
        Data:{
            matrizn: undefined,
            valoring: undefined
            //: undefined
        },
        Methods:{
            initExceptions: function()
            {
                Module.Exceptions.UserExcepction.prototype.toString = function(){
                    
                    return `${this.message}`;
                };
            },
                init: function(nro ){
                    

                    if (nro  < 1 )
                    {
 
                        throw new Module.Exceptions.UserExcepction("Debe de ingresar un numero mayor a 0");
                    }

                    var arreglonro  = [];
                    for(let i = 0; i < (nro*nro); i +=1)
                    {

                        arreglonro.push(Math.floor(Math.random() * 101)) ;
                        

                    }
                    

                    Module.Data.matrizn  = arreglonro;
                    Module.Data.valoring  = nro;

                },
                cal: function(){

                    let sumadematriz = 0;
                    let concatenacion = '';
                    let cont = 1,contaux = 1;
                    
                    for(let i = 1; i <= (Module.Data.valoring*Module.Data.valoring) ; i +=1)
                    {

                        concatenacion = concatenacion +  '\t' + Module.Data.matrizn[i-1];

                         
                        if (contaux == cont)
                        {
                            sumadematriz =  Module.Data.matrizn[i-1] + sumadematriz;
                        }

                        if ((i%Module.Data.valoring) == 0 )
                        {
                            console.log(concatenacion);
                            concatenacion = ''
                            cont += 1;
                            contaux = 0;
                        }
                       
                        contaux +=1;
                    }

                    console.log('La suma de la matriz principal es '+sumadematriz);
                    
                   
                }
                
        },
        Exceptions:{
            UserExcepction: function(message){
                this.message = message;
                this.date = new Date();
                this.nombre = 'UserException';
            }
         }
    }
    
    Module.Methods.init(5);
    Module.Methods.cal();
})();
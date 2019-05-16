(function (){
    var Module = {
        Data:{
            arr: undefined//,
            //: undefined
        },
        Methods:{
            initExceptions: function()
            {
                Module.Exceptions.UserExcepction.prototype.toString = function(){
                    
                    return `${this.message}`;
                };
            },
                init: function(arre){
                    Module.Data.arr = arre;
                    Module.Methods.initExceptions();
                    if (Module.Data.arr.length  < 1 )
                    {
 
                        throw new Module.Exceptions.UserExcepction("Debe de completar el arreglo");
                    }

                    
                    console.log(Module.Validacion.validaArregloNum());
                    if (Module.Validacion.validaArregloNum() == false)
                    {
 
                        throw new Module.Exceptions.UserExcepction("El Arreglo debe de tener solo número");
                    }
                    

                },
                cal: function(){
                    let sumatoria = 0;
                    for(let i = 0; i < Module.Data.arr.length; i +=1)
                    {
                        //console.log(Data.arr[i]);
                        sumatoria = Module.Data.arr[i]+sumatoria;
                    }
                    console.log('La sumatoria del Arreglo es '+sumatoria);
                }
                
        },
        Validacion:{
                validaArregloNum: function(){
                    Module.Data.arr.forEach(function(valor) {
                        
                        if (!Number.isInteger(valor))
                         {
                           console.log(Number.isInteger(valor));
                           return false;
                         }
                            
                        
                    });
                    
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
    const enteros = ['x',5,4,1,9,25];
    Module.Methods.init(enteros);
    Module.Methods.cal();
})();
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

                    
                    //console.log(Module.Validacion.validaArregloNum());
                    if (Module.Validacion.validaArregloNum())
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
                    
                    var find = false;
                    for(let i = 0; i < Module.Data.arr.length; i +=1)
                    {
                        if (!Number.isInteger(Module.Data.arr[i]) )
                        {
                            find = true;
                        }
                        
                    }

                    if (find)
                    {
                        return true;
                    }else 
                    {
                        return false;
                    }
                    
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

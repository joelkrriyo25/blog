(function (){
    var Module = {
        Data:{
            arr: undefined,
            almCant: undefined
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
                    var contados = [];
                    var cantTotal = 0;

                    for(let i = 0; i < Module.Data.arr.length; i +=1)
                    {       
                           
                            if (contados.indexOf(Module.Data.arr[i]) < 0)
                            {
                                    var cantAux = 0
                                    for(let y = 0; y < Module.Data.arr.length; y +=1)
                                    {
                                        if ( (Module.Data.arr[i] === Module.Data.arr[y]))
                                        {
                                        // console.log(Module.Data.arr[i]);
                                            cantAux +=1;
                                        }
                                    }
                                    
                                    //console.log(Module.Data.arr[i], (cantAux%2) , cantAux);

                                    contados.push(Module.Data.arr[i]);

                                    if ((cantAux%2) == 0)
                                    {
                                        cantTotal +=cantAux/2;
                                    }
                                    else 
                                    {
                                        cantTotal +=Math.floor(cantAux/2);
                                    }

                                                            
                        }

                    }

                    console.log('La cantidad de pares en el arreglo es de ',cantTotal);

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
    const enteros =[1,1,1,1,1,2,2,2] ;//[10,5,4,4,4,1,1,10,10,10];
    Module.Methods.init(enteros);
    Module.Methods.cal();
})();

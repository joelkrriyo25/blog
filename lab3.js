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

                    
                    if (isNaN(Module.Data.arr))
                    {
 
                        throw new Module.Exceptions.UserExcepction("El Arreglo debe de tener solo número");
                    }
                    

                },
                cal: function(){
                    
                    
                    Module.Data.arr.forEach(function(element) {
                        console.log(element);
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
    const nrospar = [5,4,1,9,25,5];
    Module.Methods.init(nrospar);
    Module.Methods.cal();
})();
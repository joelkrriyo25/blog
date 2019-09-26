#include "colors.inc"
#include "textures.inc"

background{
	LightGrey
}
camera{
	location <0,3,-18>
      look_at <0,2,-4>
}

light_source {
	
	<0,5,-10>
	colour<1,1,1>
} 


union{

  plane {
    y, 10
    pigment { color SkyBlue }
  }
  plane {
    y, 0
    pigment { checker color Yellow color Green  }
  }
      
        
        sphere {
        <-1.4,5.5,-4>,0.8
        pigment{ color Red} 
        }

        sphere {
        <-0.5,7,-4>,0.8
        pigment{ color Red} 
        } 
            
         box
         {
          <1.1,5.2,-4.8>,<1.9,5.8,-4.8>
          pigment{ color rgb<1 ,1 ,0>}
           rotate <0,0,17>
         }
   
        sphere {
        <1,6.2,-4>,0.8
        pigment{ color Red} 
        }  

         sphere {
        <0.1,4.8,-4>,0.8
        pigment{ color Red} 
        }
        
        cylinder {
        <0, 1.8, -3.5>,     // Center of one end
        <0, 4.5, -3.5>,     // Center of other end
        0.3            // Radius
        pigment{ color MediumSpringGreen}
        } 

        box
        {
         <-1.3,1.8,-7>,<1.3,2.2,-3>
         pigment{ color SemiSweetChoc}
        }
        
         box
        {
         <-0.9,0,-7>,<1,1.8,-3>
         pigment{ color LightWood}
        }

        triangle {
        <0,3.5,-8>,<1,4,-8>,<0,4,-9> 
         pigment{ color MediumSpringGreen}
         rotate 35
         translate <7.4,-2.2,-3.5>
        }


        triangle {
        <0,3.5,-8>,<1.5,4,-8>,<0,5,-9> 
         pigment{ color MediumSpringGreen}
         rotate 180
         translate <-1.8,-0.55,4>
        }
 }  
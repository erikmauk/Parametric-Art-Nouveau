var max_theta, num_points, diam;
 
function setup()
{
   createCanvas(400, 400);
   frameRate(100);
 
   max_theta = 0
   num_points = 500
   diam = 10;
   noStroke();
   background(166);
   for(var i=0;i<30;i++)
   {
      drawFlowerDesigns(random(0,width-20),random(0,height-20),random(.2,.8),random(0,2*PI));
   }
}
 
function draw()
{
   drawSineCurve(100, 100, 300, 100, 10, 6, 60, .8, .75, 20, 10);
   drawSineCurve(225, 65, 175, 65, 9, 8, 50, .5, .85, 15, 3);
   drawSineCurve(175, 250, 225, 250, 5, 8, 60, .3, .35, 7, 3);
   drawSineCurve(50, 150, 350, 150, 7, 6, 40, .5, .65, 10, 4);

  //drawing speed
   max_theta += 4*PI/num_points;

   if (max_theta > 3*PI)
   {
      noLoop();
   }


  // Middle of top flowers
   fill(0)
   ellipse(70, 80, 10);
   ellipse(width-70, 80, 10);

   var x, y, t, radius;
   fill(75);
   drawTopFlower(200,50);
   drawSideFlower(200,215,10);
   fill(255);
   drawSideFlower(330,80,(3/4));
   drawSideFlower(70,80,(3/4));

  
   
 
}

function drawFlowerDesigns(x,y,sc,rot)
{
   push();
      translate(x,y);
      rotate(rot);
      scale(sc);
      fill(random(100,255),random(100,255),random(100,255));
      for(var r=0;r<3*PI;r+=PI/12)
      {
         rotate(r);
         ellipse(10,0,40,10);
      }
     
      fill(random(100,255),random(100,255),random(100,255));
      ellipse(0,0,20);

   pop();
}

function drawTopFlower(xC,yC)
{
   push();
      translate(xC,yC);
      rotate(5*PI/4);
      for(var theta=0;theta<5*PI;theta+=3*PI/400)
      {
         var x= 25*sin(PI*theta)*cos(theta);
         var y= 25*cos(PI*theta)*sin(theta);
         ellipse(x,y,1.5);
      }

   pop();   
}
function drawSideFlower(xC,yC,t)
{
   push();
      translate(xC,yC);
      for(var theta=0;theta<8*PI;theta+=3*PI/400)
      {
         var x= 40*sin(t*theta)*cos(theta);
         var y= 40*sin(t*theta)*sin(theta);
         ellipse(x,y,1.5);
      }
   pop();
}

function drawSineCurve(x1, y1, x2, y2, startDiam, thickness, amp, per, length, max_diam, min_diam){

   var diam = startDiam;

   var y = 0;

   push();

      translate(x1, y1);

      var change = 10/(num_points/thickness);

      for (let t = 0; t < max_theta; t += 4*PI/num_points)

      {

         x = amp*sin(per*t)

         y += length

         fill(0);

         ellipse(x, y, diam);

         diam += change;

         if (diam >= max_diam || diam <= min_diam)

            change = -change;

      }

   pop();

    diam = startDiam;

 

   y = 0;

   push();

      translate(x2, y2);

      scale(-1, 1);

      var change = 10/(num_points/thickness);

      for (let t = 0; t < max_theta; t += 4*PI/num_points)

      {

         x = amp*sin(per*t)

         y += length

         fill(0);

         ellipse(x, y, diam);

         diam += change;

         if (diam >= max_diam || diam <= min_diam)

         change = -change;

      }

   pop(); 

}


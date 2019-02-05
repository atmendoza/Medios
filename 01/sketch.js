var i = 0
function setup() {
  createCanvas(400, 400);
  //fila 1 pt1
  for(var i = 0; i < 80; i = i + 40){
    fill(0);
    triangle(i, 0, i, 10, i+10, 10, i, 0);
    triangle(i+10, 0, i+10, 10, i+20, 10, i+10, 0);
  }
	//repeticion abajo 1
  for(var i = 0; i < 80; i = i + 40){
    fill(0);
    triangle(i, 40, i, 50, i+10, 50, i, 40);
    triangle(i+10, 40, i+10, 50, i+20, 50, i+10, 40);
  }
	
	//fila 1 pt1 repeticion abajo 2
  for(var i = 0; i < 80; i = i + 40){
    fill(0);
    triangle(i, 160, i, 170, i+10, 170, i, 160);
    triangle(i+10, 160, i+10, 170, i+20, 170, i+10, 160);
  }
	
	//fila 1 pt1 repeticion abajo 2.2
  for(var i = 0; i < 80; i = i + 40){
    fill(0);
    triangle(i, 200, i, 210, i+10, 210, i, 200);
    triangle(i+10, 200, i+10, 210, i+20, 210, i+10, 200);
  }
	
	//fila 1 pt1 repeticion al lado 2
  for(var i = 160; i < 240; i = i + 40){
    fill(255, 193, 0);
		noStroke(0);
    triangle(i, 160, i, 170, i+10, 170, i, 160);
    triangle(i+10, 160, i+10, 170, i+20, 170, i+10, 160);
  }
	
	//fila 1 pt1 repeticion al lado 2
  for(var i = 160; i < 240; i = i + 40){
    fill(255, 193, 0);
		noStroke(0);
    triangle(i, 200, i, 210, i+10, 210, i, 200);
    triangle(i+10, 200, i+10, 210, i+20, 210, i+10, 200);
  }
	
	  //fila 1 pt2
  for(var i = 30; i<80; i = i + 40){
    fill (0);
    triangle(i-10, 0, i, 10, i, 0, i-10, 0);
    triangle(i, 0, i+10, 10, i+10, 0, i, 0);
  }
	
	//fila 1 pt2 repeticion abajo
  for(var i = 30; i<80; i = i + 40){
    fill (0);
    triangle(i-10, 40, i, 50, i, 40, i-10, 40);
    triangle(i, 40, i+10, 50, i+10, 40, i, 50);
  }
	
	//fila 1 pt2 repeticion abajo 2
  for(var i = 30; i<80; i = i + 40){
    fill (0);
    triangle(i-10, 160, i, 170, i, 160, i-10, 160);
    triangle(i, 160, i+10, 170, i+10, 160, i, 160);
  }
	
	//fila 1 pt2 repeticion abajo 2.2
  for(var i = 30; i<80; i = i + 40){
    fill (0);
    triangle(i-10, 200, i, 210, i, 200, i-10, 200);
    triangle(i, 200, i+10, 210, i+10, 200, i, 200);
  }
	
	//fila 1 pt2 repeticion al lado
  for(var i = 110; i<240; i = i + 40){
    fill (0);
    triangle(i-10, 40, i, 50, i, 40, i-10, 40);
    triangle(i, 40, i+10, 50, i+10, 40, i, 50);
  }
	//fila 1 pt2 repeticion al lado 2
  for(var i = 190; i<240; i = i + 40){
    fill(255, 193, 0);
		noStroke(0);
    triangle(i-10, 160, i, 170, i, 160, i-10, 160);
    triangle(i, 160, i+10, 170, i+10, 160, i, 160);
  }
	
	//fila 1 pt2 repeticion al lado 2.2
  for(var i = 190; i<240; i = i + 40){
    fill(255, 193, 0);
		noStroke(0);
    triangle(i-10, 200, i, 210, i, 200, i-10, 200);
    triangle(i, 200, i+10, 210, i+10, 200, i, 2100);
  }
	
    //fila 1 pt1
  for(var i = 160; i < 240; i = i + 40){
    fill(0);
    triangle(i, 0, i, 10, i+10, 10, i, 0);
    triangle(i+10, 0, i+10, 10, i+20, 10, i+10, 0);
  }
	
  //repetición al lado
  for(var i = 160; i < 240; i = i + 40){
    fill(0);
    triangle(i, 40, i, 50, i+10, 50, i, 40);
    triangle(i+10, 40, i+10, 50, i+20, 50, i+10, 40);
  }
	
  //fila 2 pt1
  for(var i = -10; i<80; i = i + 40){
    fill (0);
    triangle(i, 10, i, 20, i+10, 20, i, 10);
    triangle(i+10, 10, i+10, 20, i+20, 20, i+10, 10);
  }
	
	 //fila 2 pt1 al lado
  for(var i = 70; i<240; i = i + 40){
    fill (0);
    triangle(i, 10, i, 20, i+10, 20, i, 10);
    triangle(i+10, 10, i+10, 20, i+20, 20, i+10, 10);
  }
	
	//fila 2 pt1 repeticion abajo
  for(var i = -10; i<80; i = i + 40){
    fill (0);
    triangle(i, 50, i, 60, i+10, 60, i, 50);
    triangle(i+10, 50, i+10, 60, i+20, 60, i+10, 50);
  }
	
	//fila 2 pt1 repeticion al lado
  for(var i = 70; i<240; i = i + 40){
    fill (0);
    triangle(i, 50, i, 60, i+10, 60, i, 50);
    triangle(i+10, 50, i+10, 60, i+20, 60, i+10, 50);
  }
	
	//fila 2 pt1 repeticion abajo 2
  for(var i = -10; i<80; i = i + 40){
    fill (0);
    triangle(i, 170, i, 180, i+10, 180, i, 170);
    triangle(i+10, 170, i+10, 180, i+20, 180, i+10, 170);
  }
	
	//fila 2 pt1 repeticion abajo 2.2
  for(var i = -10; i<80; i = i + 40){
    fill (0);
    triangle(i, 210, i, 220, i+10, 220, i, 210);
    triangle(i+10, 210, i+10, 220, i+20, 220, i+10, 210);
  
	}
	//fila 2 pt1 repeticion al lado 2
  for(var i = 150; i<240; i = i + 40){
    fill(255, 193, 0);
		noStroke(0);
    triangle(i, 170, i, 180, i+10, 180, i, 170);
    triangle(i+10, 170, i+10, 180, i+20, 180, i+10, 170);
  }
	
	//fila 2 pt1 repeticion al lado 2.2
  for(var i = 150; i<240; i = i + 40){
    fill(255, 193, 0);
		noStroke(0);
    triangle(i, 210, i, 210, i+10, 220, i, 210);
    triangle(i+10, 210, i+10, 220, i+20, 220, i+10, 210);
  }
	
	
   //fila 2 pt2
  for(var i = 110; i<240; i = i + 40){
    fill (0);
    triangle(i-10, 0, i, 10, i, 0, i-10, 0);
    triangle(i, 0, i+10, 10, i+10, 0, i, 0);
  }
  
  //fila 1 pt 2 rept
  for(var i = 10; i < 80; i = i + 40){
    fill(0);
    triangle(i, 10, i+10, 20, i + 10, 10, i, 10);
    triangle(i+10, 10, i+20, 20, i+20, 10, i+10, 10);
  }
	
  //fila 2 pt3 rept
  for(var i = 170; i < 240; i = i + 40){
    fill(0);
    triangle(i, 10, i+10, 20, i + 10, 10, i, 10);
    triangle(i+10, 10, i+20, 20, i+20, 10, i+10, 10);
  }
  
	//fila 2 pt3 repeticion abajo
  for(var i = 10; i < 80; i = i + 40){
    fill(0);
    triangle(i, 50, i+10, 60, i + 10, 50, i, 50);
    triangle(i+10, 50, i+20, 60, i+20, 50, i+10, 50);
	
	}
	
	//fila 2 pt3 repeticion al lado
  for(var i = 90; i < 240; i = i + 40){
    fill(0);
    triangle(i, 50, i+10, 60, i + 10, 50, i, 50);
    triangle(i+10, 50, i+20, 60, i+20, 50, i+10, 50);
	
	}
	//fila 1 pt 2 repeticion abajo 2
  for(var i = 10; i < 80; i = i + 40){
    fill(0);
    triangle(i, 170, i+10, 180, i + 10, 170, i, 170);
    triangle(i+10, 170, i+20, 180, i+20, 170, i+10, 170);
  }
	
	//fila 1 pt 2 repeticion abajo 2.2
  for(var i = 10; i < 80; i = i + 40){
    fill(0);
    triangle(i, 210, i+10, 220, i + 10, 210, i, 210);
    triangle(i+10, 210, i+20, 220, i+20, 210, i+10, 210);
  }
	
	//fila 1 pt 2 repeticion al frente 2
  for(var i = 170; i < 240; i = i + 40){
    fill(255, 193, 0);
		noStroke(0);
    triangle(i, 170, i+10, 180, i + 10, 170, i, 170);
    triangle(i+10, 170, i+20, 180, i+20, 170, i+10, 170);
	}
	
	//fila 1 pt 2 repeticion al frente 2.2
  for(var i = 170; i < 240; i = i + 40){
    fill(255, 193, 0);
		noStroke(0);
    triangle(i, 210, i+10, 220, i + 10, 210, i, 210);
    triangle(i+10, 210, i+20, 220, i+20, 210, i+10, 210);
	}
	
	
  //Fila 3 pt1
  for(var i = 0; i < 80; i = i + 40){
    fill(0);
    triangle(i, 20, i+10, 30, i+10, 20, i, 20);
    triangle(i+10, 20, i+20, 30, i+20, 20, i+10, 20);
  }
  
  //Fila 3 pt1
  for(var i = 160; i < 240; i = i + 40){
    fill(0);
    triangle(i, 20, i+10, 30, i+10, 20, i, 20);
    triangle(i+10, 20, i+20, 30, i+20, 20, i+10, 20);
  }  
	
	//Fila 3 pt1 repeticion abajo
  for(var i = 0; i < 80; i = i + 40){
    fill(0);
    triangle(i, 60, i+10, 70, i+10, 60, i, 60);
    triangle(i+10, 60, i+20, 70, i+20, 60, i+10, 60);
  }
	
	//Fila 3 pt1 repeticion al lado
  for(var i = 160; i < 240; i = i + 40){
    fill(0);
    triangle(i, 60, i+10, 70, i+10, 60, i, 60);
    triangle(i+10, 60, i+20, 70, i+20, 60, i+10, 60);
  }
    
	//Fila 3 pt1 repetcion abajo 2
  for(var i = 0; i < 80; i = i + 40){
    fill(0);
    triangle(i, 180, i+10, 190, i+10, 180, i, 180);
    triangle(i+10, 180, i+20, 190, i+20, 180, i+10, 180);
  }
	
	//Fila 3 pt1 repetcion abajo 2.2
  for(var i = 0; i < 80; i = i + 40){
    fill(0);
    triangle(i, 220, i+10, 230, i+10, 220, i, 220);
    triangle(i+10, 220, i+20, 230, i+20, 220, i+10, 220);
  }
	
	//Fila 3 pt1 repetcion al lado 2
  for(var i = 160; i < 240; i = i + 40){
    fill(255, 193, 0);
		noStroke(0);
    triangle(i, 180, i+10, 190, i+10, 180, i, 180);
    triangle(i+10, 180, i+20, 190, i+20, 180, i+10, 180);
  }
	//Fila 3 pt1 repetcion al lado 2.2
  for(var i = 160; i < 240; i = i + 40){
    fill(255, 193, 0);
		noStroke(0);
    triangle(i, 220, i+10, 230, i+10, 220, i, 230);
    triangle(i+10, 220, i+20, 230, i+20, 220, i+10, 220);
  }
	
	
        //Fila 3 pt2
  for(var i = 20; i < 80; i = i + 40){
    fill(0);
    triangle(i, 20, i, 30, i+10, 30, i, 20);
    triangle(i+10, 20, i+10, 30, i+20, 30, i+10, 20);
  }
        //Fila 3 pt2
  for(var i = 180; i < 240; i = i + 40){
    fill(0);
    triangle(i, 20, i, 30, i+10, 30, i, 20);
    triangle(i+10, 20, i+10, 30, i+20, 30, i+10, 20);
  }
	
	   //Fila 3 pt2 repeticion abajo
  for(var i = 20; i < 80; i = i + 40){
    fill(0);
    triangle(i, 60, i, 70, i+10, 70, i, 60);
    triangle(i+10, 60, i+10, 70, i+20, 70, i+10, 60);
  }
	
	 //Fila 3 pt2 repeticion al lado
  for(var i = 100; i < 240; i = i + 40){
    fill(0);
    triangle(i, 60, i, 70, i+10, 70, i, 60);
    triangle(i+10, 60, i+10, 70, i+20, 70, i+10, 60);
  }
	
	//Fila 3 pt2 repeticion abajo 2
  for(var i = 20; i < 80; i = i + 40){
    fill(0);
    triangle(i, 180, i, 190, i+10, 190, i, 180);
    triangle(i+10, 180, i+10, 190, i+20, 190, i+10, 180);
  }
	
	//Fila 3 pt2 repeticion abajo 2.2
  for(var i = 20; i < 80; i = i + 40){
    fill(0);
    triangle(i, 220, i, 230, i+10, 230, i, 220);
    triangle(i+10, 220, i+10, 230, i+20, 230, i+10, 220);
  }
	
	//Fila 3 pt2 repeticion al lado 2
  for(var i = 180; i < 240; i = i + 40){
    fill(255, 193, 0);
		noStroke(0);
    triangle(i, 180, i, 190, i+10, 190, i, 180);
    triangle(i+10, 180, i+10, 190, i+20, 190, i+10, 180);
  }
	
	//Fila 3 pt2 repeticion al lado 2.2
  for(var i = 180; i < 240; i = i + 40){
    fill(255, 193, 0);
		noStroke(0);
    triangle(i, 220, i, 230, i+10, 230, i, 220);
    triangle(i+10, 220, i+10, 230, i+20, 230, i+10, 220);
  }
	
	//fila 4 triangulo solo
	
	fill (0);
	triangle(0, 30, 10, 40, 10, 30, 0, 30);
	
	fill (0);
	triangle(0, 70, 10, 80, 10, 70, 0, 70);
	
	fill (0);
	triangle(160, 70, 170, 80, 170, 70, 160, 70);
	
	//cuarta fila pt1
	for(var i = 10; i < 80; i = i + 40){
    fill(0);
		triangle(i, 30, i, 40, i + 10, 40, i, 30);
		triangle(i+10, 30, i+10, 40, i + 20, 40, i+10, 30);
	}
	//cuarta fila pt1
	for(var i = 170; i < 220; i = i + 40){
    fill(0);
		triangle(i, 30, i, 40, i + 10, 40, i, 30);
		triangle(i+10, 30, i+10, 40, i + 20, 40, i+10, 30);
	}
	
	//cuarta fila pt1 repeticion abajo
	for(var i = 10; i < 80; i = i + 40){
    fill(0);
		triangle(i, 70, i, 80, i + 10, 80, i, 70);
		triangle(i+10, 70, i+10, 80, i + 20, 80, i+10, 70);
	}
	
	//cuarta fila pt1 repeticion al lado
	for(var i = 90; i < 240; i = i + 40){
    fill(0);
		triangle(i, 70, i, 80, i + 10, 80, i, 70);
		triangle(i+10, 70, i+10, 80, i + 20, 80, i+10, 70);
	}
	
	//cuarta fila pt1 repeticion abajo 2
	for(var i = 10; i < 80; i = i + 40){
    fill(0);
		triangle(i, 190, i, 200, i + 10, 200, i, 190);
		triangle(i+10, 190, i+10, 200, i + 20, 200, i+10, 190);
	}
	
	//cuarta fila pt1 repeticion abajo 2.2
	for(var i = 10; i < 80; i = i + 40){
    fill(0);
		triangle(i, 230, i, 240, i + 10, 240, i, 230);
		triangle(i+10, 230, i+10, 240, i + 20, 240, i+10, 230);
	}
	
	//cuarta fila rept 2 triangulo solo
	fill (0);
	triangle(0, 190, 10, 200, 10, 190, 0, 190);
	
	//cuarta fila rept 2 triangulo solo
	fill (255, 193, 0);
	noStroke(0);
	triangle(160, 230, 170, 240, 170, 230, 160, 230);
	
	//cuarta fila pt1 repeticion al lado 2
	for(var i = 170; i < 240; i = i + 40){
    fill(255, 193, 0);
		noStroke(0);
		triangle(i, 190, i, 200, i + 10, 200, i, 190);
		triangle(i+10, 190, i+10, 200, i + 20, 200, i+10, 190);
	}
	
	//cuarta fila pt1 repeticion al lado 2.2
	for(var i = 170; i < 240; i = i + 40){
    fill(255, 193, 0);
		noStroke(0);
		triangle(i, 230, i, 240, i + 10, 240, i, 230);
		triangle(i+10, 230, i+10, 240, i + 20, 240, i+10, 230);
	}
	
	//cuarta fila al frente rept 2 triangulo solo
	fill (255, 193, 0);
	triangle(160, 190, 170, 200, 170, 190,160, 190);
	
	//cuarta fila pt2
	for(var i = 30; i < 80; i = i + 40){
    fill(0);
		triangle(i, 30, i+10, 40, i + 10, 30, i, 30);
		triangle(i+10, 30, i+20, 40, i + 20, 30, i+10, 30);
	}
	
	//cuarta fila pt2 repeticion abajo
	for(var i = 30; i < 80; i = i + 40){
    fill(0);
		triangle(i, 70, i+10, 80, i + 10, 70, i, 70);
		triangle(i+10, 70, i+20, 80, i + 20, 70, i+10, 70);
	}
	
	//cuarta fila pt2 repeticion abajo
	for(var i = 110; i < 240; i = i + 40){
    fill(0);
		triangle(i, 70, i+10, 80, i + 10, 70, i, 70);
		triangle(i+10, 70, i+20, 80, i + 20, 70, i+10, 70);
	}
	
	
	//cuarta fila pt2 repeticion abajo 2
	for(var i = 30; i < 80; i = i + 40){
    fill(0);
		triangle(i, 190, i+10, 200, i + 10, 190, i, 190);
		triangle(i+10, 190, i+20, 200, i + 20, 190, i+10, 1900);
	}
	
	//cuarta fila pt2 repeticion abajo 2.2
	for(var i = 30; i < 80; i = i + 40){
    fill(0);
		triangle(i, 230, i+10, 240, i + 10, 230, i, 230);
		triangle(i+10, 230, i+20, 240, i + 20, 230, i+10, 230);
	}
	
	//cuarta fila pt2 repeticion al lado 2
	for(var i = 190; i < 240; i = i + 40){
    fill(255, 193, 0);
		noStroke();
		triangle(i, 190, i+10, 200, i + 10, 190, i, 190);
		triangle(i+10, 190, i+20, 200, i + 20, 190, i+10, 190);
	}
	
	//cuarta fila pt2 repeticion al lado 2.2
	for(var i = 190; i < 240; i = i + 40){
    fill(255, 193, 0);
		noStroke();
		triangle(i, 230, i+10, 240, i + 10, 230, i, 230);
		triangle(i+10, 230, i+20, 240, i + 20, 230, i+10, 230);
	}
	
	
	//triangulos solos
	fill (0);
	triangle(160, 30, 170, 40, 170, 30, 160, 30);
	
	fill (0);
	triangle(230, 30, 240, 40, 240, 30, 230, 30);

	
	for(var i = 190; i < 220; i = i + 40){
    fill(0);
		triangle(i, 30, i+10, 40, i + 10, 30, i, 30);
		triangle(i+10, 30, i+20, 40, i + 20, 30, i+10, 30);
	}
	
	fill(255);
	//noStroke(0);
	rect(80, 0, 80, 80);
	rect(80,160, 80, 80);
	
	fill(255);
	//noStroke(0);
	rect(240, 0, 80, 80);
}




function draw() {
  

  }

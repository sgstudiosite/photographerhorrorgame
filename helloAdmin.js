function hello(){
	
	let name = prompt("Добрый день! Как вас зовут?");
	
	let pass = prompt("Хорошо, "+name+", подвердите что вы Gorshok, введите специальный ключ.");
	
	if (pass !== 'GORSHOK12AND34SG56GAMES'){
	
		window.alert(name+", вы не Gorshok! Убирайтесь!");
	
	}
	
	else{
		
		window.location.href = 'index3.html';
		
	}
	
}
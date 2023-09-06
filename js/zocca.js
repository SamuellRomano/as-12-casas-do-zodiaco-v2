function MudaDesenho(){
    const texto = document.querySelector('#inf1');
    const texto2 = document.querySelector('#inf2');
    const imagem = document.querySelector('#img');
    const valor = document.querySelector('#valor').value;
    var d = document.querySelector('#valor2').value;
    var [ano, mes, dia] = d.split('-').map(Number);
    
    if(valor=="gemeos" || valor=="Gemeos" || valor=="Gêmeos" || valor=="gêmeos" || ((dia >=21 && dia<= 31 && mes == 5) || (dia >= 1 && dia <=20 && mes==6))){
        texto.innerHTML = "GEMEOS";
        imagem.setAttribute("src","https://scontent-gru1-2.xx.fbcdn.net/v/t1.6435-9/89740468_2684621358302226_2048886961413816320_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=aC2WZabnKuQAX_rrt64&_nc_oc=AQlhPWoWdc1OquxcdsrChRe1F6SR73JVWB7lM8BeTxMsy3p3IvlkICSSfAOL7RSALl8&_nc_ht=scontent-gru1-2.xx&oh=00_AfCWAAoX9Zdt0sAosbWtEDVwwROls0y92rcYMvf44IlLwg&oe=65142BB8");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Saga de Gêmeos é um poderoso cavaleiro de ouro, sendo considerado como o mais poderoso dentre os doze cavaleiros de ouro, ele era um exemplo de conduta e comprometimento para com sua deusa Athena. O cavaleiro de gêmeos possuía um irmão gêmeo chamado Kanon, que propôs que eles matassem Athena e comandassem o mundo.";
    }

    else if(valor=="escorpiao" || valor=="Escorpiao" || valor=="escorpião" || valor== "Escorpião" || ( (dia >= 23 && dia <=31 && mes==10) || (dia >=1 && dia<= 21 && mes ==11))){
        texto.innerHTML = "ESCORPIAO";
        imagem.setAttribute("src","https://i.pinimg.com/originals/a1/32/7d/a1327d854d035a830ce1559cb503b2f8.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Milo de Escorpião (蠍座のミロ Sukōpion no Miro) foi, no século XX, o Cavaleiro de Ouro de Escorpião que protegia a Casa de Escorpião no Santuário. ";
    }
    
    else if(valor=="peixes" || valor=="Peixes"|| ((dia>=19 && dia <= 29 && mes==2) || (dia >=1 && dia<= 20 && mes==3))){
        texto.innerHTML = "PEIXES";
        imagem.setAttribute("src","https://www.socialdub.com/groupspictures/29429/29429808022214050996.jpg?x2");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Afrodite de Peixes (魚座ピスケスのアフロディーテ Pisukesu no Afurodite?) é o Cavaleiro de Ouro de Peixes e protetor da última Casa do Zodíaco do século XX.";
    }
    else if(valor=="aries" || valor=="Aries" || valor=="Áries" || valor== "áries" || ((dia >= 21 && dia <= 31 && mes==3) || (dia>= 1 && dia <= 20 && mes ==4))){
        texto.innerHTML = "ARIES";
        imagem.setAttribute("src","https://pm1.aminoapps.com/6400/fda3e49d4380536aa80b3aa954bc4a79242596dd_hq.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Mu é o Cavaleiro de Ouro de Áries do século XX, que protege a Casa de Áries no Santuário. Hábil na restauração de Armaduras, é ele quem conserta as Armaduras de Bronze do Seiya e dos outros antes da Batalha das Doze Casas do Zodíaco. Como desde cedo desconfiava do Grande Mestre, deu as costas ao Santuário.";
    }
    else if(valor=="touro" || valor== "Touro" || ((dia >=21 && dia <= 31 && mes==4) || (dia>= 1 && dia<= 20 && mes == 5))){
        texto.innerHTML = "TOURO";
        imagem.setAttribute("src","https://pm1.aminoapps.com/6403/ffe9e1b19c99f2c7da6471cf290c2e7695c15573_hq.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Aldebaran de Touro Foi ele quem, após ter um chifre da armadura arrancado por Seiya, decidiu permitir que os Cavaleiros de Bronze seguissem adiante, tornando possível todos os acontecimentos marcantes e emocionantes que sucedem este primeiro embate nas 12 casas.";
    }
    else if(valor=="cancer" || valor=="Cancer" || valor=="Câncer" || valor=="câncer" || ((dia >= 21 && dia<=30 && mes == 6) || (dia>=1 && dia<= 22 && mes ==7))){
        texto.innerHTML = "CANCER";
        imagem.setAttribute("src","https://pm1.aminoapps.com/6712/2f602f30020dba9dfead26a07c60424fc696be14_hq.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Máscara da Morte de Câncer (蟹座キャンサーのデスマスク Kyansā no Desumasuku?) é o Cavaleiro de Ouro de Câncer e protetor da quarta Casa do Zodíaco do século XX.";
    }
    else if(valor=="leao" || valor=="Leao" || valor=="Leão" || valor=="leão" ||((dia >= 23 && dia <= 31 && mes == 7) || (dia >= 1 && dia <= 22 && mes == 8))){
        texto.innerHTML = "LEAO";
        imagem.setAttribute("src","https://i.pinimg.com/736x/f3/19/72/f31972efbb5181bb1a3b12ff2449783a.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Irmão de Aiolos. Apesar de sua personalidade explosiva, tem um coração puro que distingue rapidamente os justos, por isso foi um dos primeiros Cavaleiros de Ouro a reconhecer a autoridade de Atena. Como seu irmão Aiolos foi condenado como traidor, ele tenta limpar o nome da família jurando fidelidade ao Grande Mestre, até participando voluntariamente do extermínio dos Cavaleiros de Bronze.";
    }
    else if(valor=="virgem" || valor=="Virgem" || ((dia >= 23 && dia <= 31 && mes == 8) || (dia >= 1 && dia <= 22 && mes ==9))){
        texto.innerHTML = "VIRGEM";
        imagem.setAttribute("src","https://i.pinimg.com/originals/fb/28/a1/fb28a152c0c86f5f899a3e4b4ff26828.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Shaka de Virgem (乙女座バルゴのシャカ Barugo no Shaka?) é o Cavaleiro de Ouro de Virgem do Século XX, que protege a Casa de Virgem no Santuário. ";
    }
    else if(valor=="libra" || valor=="Libra" || ((dia >= 23 && dia <= 30 && mes == 9 ) || (dia >= 1 && dia <= 22 && mes == 10))){
        texto.innerHTML = "LIBRA";
        imagem.setAttribute("src","https://i.pinimg.com/1200x/84/13/61/841361eb3400e464f7a2e842d9412a51.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Dohko de Libra (天秤座の童虎, Raibura no Dōko?) fora um lendário e renomado Cavaleiro de Ouro do Santuário de Atena por ter lutado e sobrevivido a Guerra Santa contra Hades no Século XVIII ao lado de seu parceiro de batalhas, Shion de Áries. ";
    }
    else if(valor=="sagitario" || valor=="Sagitario" || valor=="Sagitário" || valor== "sagitário" || ((dia >= 22 && dia <= 30 && mes == 11) || (dia >=1 && dia<= 21 && mes == 12))){
        texto.innerHTML = "SAGITARIO";
        imagem.setAttribute("src","https://i.pinimg.com/originals/c1/8c/5c/c18c5c2a4af3c41133b3831e7c5e7f82.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Aiolos de Sagitário (射手座サジタリアスのアイオロス Sajitariasu no Aiorosu?) é o Cavaleiro de Ouro de Sagitário do século XX. Antes de morrer, há 13 anos, entregou Atena ainda bebê e sua Armadura de Ouro aos cuidados de Mitsumasa Kido, que estava viajando pela Grécia. Desde então, Aiolos passou a ser considerado um traidor no Santuário, que era comandado por Saga disfarçado de Grande Mestre. ";
    }
    else if(valor=="capricornio" || valor=="Capricornio" || valor=="Capricórnio" || valor=="capricórnio" || ((dia >= 22 && dia <= 31 && mes == 12) || (dia >= 1 && dia <= 20 && mes == 1))){
        texto.innerHTML = "CAPRICORNIO";
        imagem.setAttribute("src","https://p2.trrsf.com.br/image/fget/cf/540/960/smart/images.terra.com/2023/01/19/3faa694204dff1749e739e904d4dc57c-rhgmdcckquk2.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Shura de Capricórnio (山羊座のシュラ Kapurikōn no Shura?) é o Cavaleiro de Ouro que protege a Casa de Capricórnio. Shura se considera o cavaleiro mais fiel a Atena, porém sua excessiva lealdade ao Santuário acabou levando-o a cometer uma série de equívocos.";
    }
    else if(valor=="aquario" || valor=="Aquario" || valor=="Aquário" || valor=="aquário" || ((dia >= 21 && dia <= 31 && mes == 1) || (dia >= 1 && dia <= 18 && mes == 2))){
        texto.innerHTML = "AQUARIO";
        imagem.setAttribute("src","https://i.pinimg.com/736x/33/0a/d5/330ad57de3286f3d9c6ab856f596dbc5.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "Camus de Aquário (水瓶座アクエリアスのカミュ Akueriasu no Kamyu?) é o Cavaleiro de Ouro que protege a Casa de Aquário no Santuário. No mangá, treinou o pequeno Hyoga e Isaak durante seis anos nas geladas terras do leste da Sibéria. foi obrigado a lutar contra Hyoga no Santuário.";
    }
    else if(valor=="shrek" || valor == "Shrek" || (dia == 21 && mes == 4)){
        texto.innerHTML = "SHREK";
        imagem.setAttribute("src","https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/04/04/1596394453-shrekfierce.jpg");
        imagem.setAttribute("width","300px");
        texto2.innerHTML = "ME DA UM REAL";
    }
    else{
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src","img/x.webp");
        imagem.setAttribute("width","250px");
    }
}

function playAudio() {
    var audio = document.getElementById("music");
    var speakerSlash = document.getElementsByClassName("ph-speaker-slash")[0];
    var speakerHigh = document.getElementsByClassName("ph-speaker-high")[0];
  
    if (!audio.paused && !audio.ended) {
      audio.pause();
      speakerSlash.style.display = "block";
      speakerHigh.style.display = "none";
    } else {
      audio.play();
      speakerSlash.style.display = "none";
      speakerHigh.style.display = "block";
    }
  }
  
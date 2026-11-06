import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service.js';
import { ujrendelesDTO } from './ujrendeles.dto.js';
import { never } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  @Render('index')
  getHello() {
    return {
      title: 'Webshop'
    }
  }

  @Get()
  @Render('index')
  getWebshop() {
    return {
      title: 'Webshop',
      hiba: '',
      body: {},
      siker: false
    }
  }


  @Post("index")
  @Render("index")
  async ujRendeles(@Body() body: ujrendelesDTO) {



    let hiba = "";
    const nev = body.nev;
    const szamlacim = body.szamlacim;
    const szallitasCim = body.szallitasCim;
    const telefonszam = body.telefonszam;
    const bankkartyaszam = body.bankkartyaszam;
    const lejarat = body.lejarat;
    const biztonsagiKod = body.biztonsagiKod;



    if (!nev || nev.trim() === "") {
      return {
        hiba: "A név nem lehet üres"
      }
    }

    const szamlaCimREGEX = /^[a-zöüóőúéáűí, \d a-z \d]{3,}$/gmi
    if (!szamlaCimREGEX.test(body.szamlacim || '')) {
      hiba += 'Hibás számlázási cím! ';
    }
    
    const szallitasCimREGEX = /^[a-záéíóöőúüűA-ZÁÉÍÓÖŐÚÜŰ0-9 .\/-]{3,}$/;
    if (!szallitasCimREGEX.test(body.szallitasCim || '')) {
      hiba += 'Hibás számlázási cím! ';
    }
    
    const telefonREGEX = /^\+36\d{9}$/;
    if (!szallitasCimREGEX.test(body.telefonszam || '')) {
      hiba += 'Hibás számlázási cím! ';
    }
    // const kuponREGEX = /^[A-Z]{2}-\d{4}$/;
    const kartyaREGEX = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    const lejaratREGEX = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const cvcREGEX = /^\d{3}$/;









  }


}

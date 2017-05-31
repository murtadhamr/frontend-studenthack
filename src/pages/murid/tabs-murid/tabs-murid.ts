import { Component } from '@angular/core';


import { ContactPage } from '../../contact/contact';
import { HomePage } from '../../home/home';
import { ChatPage } from '../../chat/chat';
import { TugasMuridPage } from '../tugas-murid/tugas-murid'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ChatPage;
  tab3Root = TugasMuridPage;
  tab4Root = ContactPage;

  constructor(
    
  ) {

  }
}

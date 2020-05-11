import React from 'react';
import PropTypes from 'prop-types'
import './App.css';


const Header = () => {
  return(
    <div className="header-element">
      <h2>Təsadüfi ləqəb generatoru</h2>
    </div>
    )
}

class MainContent extends React.Component{
  state = {
    firstName: "",
    nickName: "",
    isGenerated: false
  }
 
  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value,
      nickName: "",
      isGenerated: false
    })
  }
  
  handleClick = () => {
     var ad = this.state.firstName;
    const capUpper = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const getRandomInt = (min, max) => {
  	return Math.floor(Math.random() * (max - min)) + min;
}

const generateName = () => {
  var sifet = [
  "fərqli","işlənmiş","vacib","geniş","əlçatan","məşhur","bacarıqlı",
  "bilinən","müxtəlif","çətin","yek","tarixi","dəcəl","ağıllı",
  "qorxmuş","emosional","qoca","siyasi","oxşar","sağlam","tibbi",
  "ənənəvi","federal","bütöv","güclü","mənalı","uğurlu","bahalı","inteligent",
  "maraqlı","kasıb","xoşbəxt","məsuliyyətli","şirin","istəkli","xoş",
  "möhtəşəm","imkansız","ciddi","nəhəng","nadir","texniki","tipik",
  "rəqabətcil","kritik","elektronik","ayıq","təhsilli","qlobal","leqal",
  "dəqiq","təhlükəli","dramatik","effektiv","güclü","xarici","ac","praktiki",
  "psixoloji","şiddətli","müxtəlif","qeyri-adi","davamlı","mədəni","varolan",
  "təmiz","qorxan","sonrakı","bədbəxt","qəbulolunan","aqresiv","sıxıcı","başqa",
  "şərqi","məntiqi","düşüncəli","sərt","sivil","keçmiş","massiv","qərbi","ədalətsiz",
  "gözəgörünən","canlı","əsəbi","vəhşi","vəhşibala","dostyana","bəxtəvər","çirkin",
  "tədirgin","ətraflı","füsunkar","cazibədar","daxili","xoş","dəhşətli","zəif",
  "taxta-tuxta","yuxulu","özündən-razı","ədəbli","utancaq","günahkar","tənha",
  "əsəbi","dəli","şübhəli","uzun","cıkkılı","yeni","yaxçı","əla","eyni","azad",
  "düz","xüsusi","balaca","sadə","keçmiş","əsas","milli","natural","fiziki","qısa",
  "axırıncı","yeganə","fərdi","potensial","peşəkar","beynəlmiləl","alternativ","quru",
  "soyuq","dəyərli","vacib","pozitiv","yaxın","kreativ","yaşıl","gecikmiş","şad",
  "kompleksli","bərkgedən","bomba","orginal","göyçək","tam","aktiv","neqativ",
  "təhlükəsiz","yanlış","hazır","ağ","mükəmməl","unikal","klassik","sonuncu","rəsmi",
  "rahat","varlı","cayıl","normal","qəhvəyi","ucuz","dərin","obyektiv","nazik",
  "kimyəvi","ekstrim","itkin","qaranlıq","ikiqat","çiy","yumşaq","bərk","qəribə",
  "məşğul","ölü","yumru","iti","qalın","müdrik","dar","qürurlu","vəhşi","kobud","üzgün","qanunsuz",
  "uca","dəcəl","super","sarı","asılı","şipşirin","cəsur","sakit","çirkli","böyük","səmimi","əziz",
  "sərxoş","boş","qarşısıalınmaz","səliqəli","ağıllı","ürəyiyanan","paxıl","duzlu","plastik",
  "maksimum","ümstad","qırmızı","ideal","qızıl","gümüşü","çevik","acı"
  ]
  
  
  var isim = [
  "yol","əsər","xəritə","sistem","şəxs","oxucu","qida","teorem","qanun","quş",
  "problem","bilik","güc","krokodil","dəryaz","sənaye","çəkic","şey","soba","əjdaha","vəziyyət",
  "keçəl","eqoist","kərpic","beton","çeşka","ölkə","imtahan","kino","təchizat","serial","kələm kəpənəyi",
  "qarpız yarpağı","pişik","texnoloq","ordu","kamera","qapı","şkaf","ətraf-mühit",
  "şlaqbaum","ay","yazıçı","balıqçı","çəkməçi","müğənni","bıçaq","qılınc","bizon","öküz","cücə",
  "pişik","cimcimə","panda","koala","müəllim","mexanik","usta","mühəndis","şair","gecə","şorba","rəssam",
  "velosipedçi","blogger","maşinist","çaymen","tələbə","şagird","mühasib","sürücü","qərar","hadisə","pilot",
  "dənizçi","dəllal","üzv","memar","barmen","bərbər","biznesmen","qəssab","dülgər","kassir","şef","aşpaz","koç",
  "məşqçi","dizayner","həkim","doxtor","iqtisadçı","diş həkimi","elektrik","fermer","rejissor","ssenarist",
  "zərgər","hakim","vəkil","musiqiçi","tibb bacısı","fotoqraf","əczaçı","filosof","professor","sanitar",
  "psixoloq","resepsiyonçu","cərrah","tərcüməçi","direktor","asistent","sponsor","yatırımçı","satıcı",
  "gül satan","çörəkçi","tərəvəz satan","reklam agenti","kardioloq","dietist","uşaq həkimi","tyütor",
  "alim","laborant","kimyaçı","fizik","botanist","zooloq","ixtiraçı","səyyah","riyaziyyatçı","tarixçi",
  "bioloq","arxeoloq","çoğrafiyaçı","geoloq","kimyagər","heykəltəraş","bəstəkar","konduktor","pianist",
  "skiripkaçı","gitarist","rəqqas","bənna","kamaz şoferi","avtobus şoferi","detektiv","müfəttiş",
  "yanğınsondürən","poçtalyon","dərzi","model","kitabxanaçı","ovçu","meşəbəyi","bağban","kosmetoloq"
  ]
  
  
  var name = capUpper(sifet[getRandomInt(0, sifet.length + 1)]) + ' ' + capUpper(isim[getRandomInt(0, isim.length + 1)]);
  return capUpper(this.state.firstName) + "- " + name;
  }
  
  
  this.setState({
  isGenerated: true,
  nickName: generateName()
  })   
  }
  render(){
    return(
      <div className="main-content">
          <div className="input-div">
          <input
            className="name-input"
            type="text" 
            placeholder="Adınızı daxil edin"
            name="firstName" 
            value={this.state.firstName}
            onChange={this.handleChange} 
            /><span className="btn-separator"></span>
            <button className="primary-btn" onClick={this.handleClick}>Yarat!</button>
            <h3 style={{display: this.state.isGenerated ? "block" : "none"}}><span style={{display: this.state.firstName === '' ? "none" : "block"}} >{` ${this.state.nickName}`}</span></h3>
            <h3 style={{display: this.state.firstName === '' ? "block" : "none"}} >Adınızı yuxarıda qeyd edib düyməyə basın</h3>
          </div>
        </div>
       
    )
  }
}
MainContent.propTypes = {
  firstName: PropTypes.string.isRequired
};


const Footer = () => {
  return(
    <div className="footer-element">
      <h3><a 
      className="name-link" 
      href="https://twitter.com/notaGodfather" 
      target="_blank" 
      rel="noopener noreferrer"
      >@notaGodfather</a> tərəfindən React.js ilə yaradılıb</h3>
      </div>
  )
}



class App extends React.Component{
  render(){
    return(
      <div className="base-container">
        <Header />
        <MainContent />
        <Footer />
      </div>
    )
  }
}


export default App;

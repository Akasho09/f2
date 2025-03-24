import RightArrow from "@/components/rightArrow"
import ThreeTexts from "@/components/mainpage/threeText"
import Layout from "@/components/layyy"

const data = <div>
  <ol>
  <li>JEE Mains AIR rank :  44k  </li>
  <li>JEE Advanced AIR rank : 26k </li>
  </ol>
</div>


export default function A() {
    return  <Layout> <div className="h-screen flex w-max">
      <ThreeTexts  nav="/pros" t1="B-Tech Computer Engineering" t2="Jamia Millia Islamia , New Delhi 110025." 
      t3={` Aug 2022 - May 2026 `}
      t4=" CGPA : 7.2" 
      links={[{l1:"https://drive.google.com/file/d/1VHfcJLD8fiaKNbQDGNS7KNHqO31dwKGE/view?usp=drive_link"  ,  l2:"💾 Drive"}]}></ThreeTexts>

      <ThreeTexts  nav="/pros" t1="JEE Mains and JEE Advanced" t2="Petronet Kashmir Super 30 , Srinagar Kashmir." 
      t3="Sept 2021 - Aug 2022"
      t4={data} 
      links={[{l1:"https://drive.google.com/drive/u/0/folders/1VBKGDT7q4WWNCuIjlHhReuCcu8uG2KJ5" , l2:"💾 Drive"}]}
></ThreeTexts>

      <ThreeTexts  nav="/pros" t1="PCMB 12th Boards" t2="Govt Higher Secondary School , Dangiwacha Rafiabad Baramulla Kashmir." 
      t3="
      Sept 2019 - Sept 2021 
      "
      t4="Aggregate Percentage : 86%"
      links={[{l1:"https://drive.google.com/file/d/1t3xIZu66qB-XvXVahJB-8ZZWbjffF9jp/view?usp=drive_link" , l2:"💾 Drive"}]}
></ThreeTexts>
          <div className="hidden md:flex"><RightArrow  linkk="/pros" /></div>
      
  </div></Layout>
}

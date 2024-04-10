import { Link, useNavigate } from 'react-router-dom'



function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className=''><svg width="99" height="49" viewBox="0 0 99 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.37498e-05 10.9319V0.5939H2.63753V9.61317H7.62992C10.3351 9.61317 12.5281 11.8062 12.5281 14.5114V21.2699V22.5887H11.2094H1.31879H4.37498e-05V21.2699V10.9319ZM2.63753 12.2507V19.9512H9.89062V14.5114C9.89062 13.2628 8.87848 12.2507 7.62992 12.2507H2.63753ZM28.7298 11.026V9.70622H31.3673V9.70722H39.9391H41.2579V11.026V21.364V22.6827H39.9391H30.0485H28.7298V21.364V11.026ZM31.3673 12.3447V20.0452H38.6204V12.3447H31.3673ZM57.5538 35.7289V37.0487V47.3867V48.7054H58.8725H68.7631H70.0818V47.3867V37.0487V35.7299H68.7631H60.1913V35.7289H57.5538ZM60.1913 46.0679V38.3674H67.4444V46.0679H60.1913ZM43.236 10.9565V9.63677H45.8735V9.63776H54.4453H55.1047H55.7641V12.2752H55.1047H54.4453H45.8735V19.9758H53.1266V17.5963H49.8297V14.9588H54.4453H55.7641V16.1255V16.2776V17.5963V21.2945V22.6133H54.4453H44.5548H43.236V21.2945V10.9565ZM26.6575 36.8422V35.5234H25.3387L15.6365 35.5234H14.3178V36.8422V45.5626V47.4092V48.728H15.6365H25.3387H26.6575V47.4092V43.8336H24.02V46.0905H17.3201L26.0172 40.8723L26.6575 40.4882V39.7415V36.8422ZM24.02 38.9949L16.9553 43.2335V38.1609L24.02 38.1609V38.9949ZM43.236 37.0477V35.7289H44.5548H45.8735H54.1157H55.4344V37.0477V38.3664H54.1157H52.7969H45.8735V40.7491H54.257H55.5757V42.0678V44.2599V47.4092V48.728H54.257H46.8626H45.8735H44.5548H43.236V47.4092V46.0905H44.5548H46.8626H52.9382V44.2599V43.3866H44.649H44.5548H43.236V42.0678V37.0477ZM28.9182 35.7289V37.0477V42.0678V43.3866H30.2369H30.3311H38.6204V44.2599V46.0905H32.5447H30.2369H28.9182V47.4092V48.728H30.2369H31.5557H32.5447H39.9391H41.2579V47.4092V44.2599V42.0678V40.7491H39.9391H31.5557V38.3664H38.4791H39.7978H41.1166V37.0477V35.7289H39.7978H31.5557H30.2369H28.9182ZM14.3178 21.2699V9.35406H16.9553V19.9511H26.7517V22.5886H15.6365H14.3178V21.2699ZM86.5661 35.4464V47.3622V48.6809H87.8848H98.9999V46.0435H89.2035V35.4464H86.5661ZM4.37498e-05 38.3429V48.6809H2.63753V39.6616H11.2094H12.5281V38.3429V31.5843C12.5281 28.8791 10.3351 26.6861 7.62992 26.6861H1.31879H4.37498e-05V28.0049V38.3429ZM2.63753 37.0241V29.3236H7.62992C8.87847 29.3236 9.89062 30.3358 9.89062 31.5843V37.0241H2.63753ZM72.06 37.0487V35.7289H74.6974V35.7299H83.2693H84.588V37.0487V42.2177V47.3867V48.7054H83.2693H81.9506L81.9505 44.5833V43.5364H74.6974L74.6975 46.0679V48.7054H73.3787H72.06V47.3867V42.2177V37.0487ZM74.6974 38.3674V40.8989H81.9505V38.3674H74.6974Z" fill="white"/>
</svg></div>

            <div className='flex gap-4'>
              <Link to='/login' className='hover:underline'>Login</Link>
              <Link to='/home' className='hover:underline'>Home</Link>
              <div className='hover:underline'>Postagens</div>
              <div className='hover:underline'>Temas</div>
              <div className='hover:underline'>Cadastrar tema</div>
              <div className='hover:underline'>Perfil</div>
              <div className='hover:underline'>Sair</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar
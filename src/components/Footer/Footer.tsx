import s from './footer.module.scss';
import rsLogo from '@/assets/rs_school.svg';
import gitHubIco from '@/assets/2993771_github_social media_icon.svg';

export default function Footer() {
  return (
    <footer>
      <div className={`${s.footer} conteiner`}>
        <div>2023</div>

        <div className={s.contacts}>
          <img src={gitHubIco} alt="" height={30} />
          <a
            href="https://github.com/IrinaPeshko"
            target="_blanc"
            className="simple_link"
          >
            IrinaPeshko
          </a>
          <a
            href="https://github.com/maria-kashpur"
            target="_blanc"
            className="simple_link"
          >
            maria-kashpur
          </a>
          <a
            className="simple_link"
            href="https://github.com/Nastasyma"
            target="_blanc"
          >
            Nastasyma
          </a>
        </div>

        <div>
          <a href="https://rs.school/" target="_blanc">
            <img src={rsLogo} alt="" height={30} />
          </a>
        </div>
      </div>
    </footer>
  );
}

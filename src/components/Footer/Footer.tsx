import s from './footer.module.scss';
import rsLogo from '@/assets/rs_school.svg';
import gitHubIco from '@/assets/2993771_github_social media_icon.svg';

const gitHubData = [
  {
    name: 'Irina Peshko',
    link: 'https://github.com/IrinaPeshko',
  },
  {
    name: 'Anastasia Shishmareva',
    link: 'https://github.com/Nastasyma',
  },
  {
    name: 'Mariya Pyzh',
    link: 'https://github.com/maria-kashpur',
  },
];

export default function Footer() {
  return (
    <footer>
      <div className={`${s.footer} conteiner`}>
        <div>2023</div>

        <div className={s.contacts}>
          <img src={gitHubIco} alt="github" height={30} />
          <div className={s.github_links}>
            {gitHubData.map((el) => (
              <a
                key={el.name}
                href={el.link}
                target="_blanc"
                className="simple_link"
              >
                {el.name}
              </a>
            ))}
          </div>
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

import s from './footer.module.scss';
export default function Footer() {
  return (
    <footer>
      <div className={`${s.footer} conteiner`}>
        <div>
          <a href="https://rs.school/" target="_blanc">
            <img
              src="./2993771_github_social media_icon.svg"
              alt=""
              height={30}
            />
          </a>
        </div>
        <div>2023</div>
        <div>
          <a href="https://rs.school/" target="_blanc">
            <img src="./rs_school.svg" alt="" height={30} />
          </a>
        </div>
      </div>
    </footer>
  );
}

// Import CSS
import './global.css';
import styles from './app.module.css';

// Import components
import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';


// Author: { avatar_url: " ", name: " ", role: " " }
// publishedAt: Date
// content: String

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/devgustavogantois.png",
      name: 'Gustavo Gantois',
      role: "Desenvolvedor Web Freelancer (Estudante)",
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 devgustavogantois.design/doctorcare' },
    ],
    publishedAt: new Date('2024-07-19 05:30')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Gasolindo.png",
      name: "Bruno (Gasolindo)",
      role: "Desenvolvedor Full Stack | Python, C#, Vue.js ",
    },
    content: [
      { type: 'paragraph', content: 'E aí gente! 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 gasolindo.design/doctorcare' },
    ],
    publishedAt: new Date('2024-07-17 23:56')
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/RenanTeixeiras.png",
      name: "Renan Texeiras",
      role: "Desenvolvedor Back End | C++, Java, Python",
    },
    content: [
      { type: 'paragraph', content: 'Olá Amigos. 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 RenanTeixeiras.design/doctorcare' },
    ],
    publishedAt: new Date('2024-07-19 12:56')
  },
  {
    id: 4,
    author: {
      avatarUrl: "https://github.com/Messias-Dev.png",
      name: "Messias Nunes Maia",
      role: "Desenvolvedor Back End | Java, TypeScript, Node.js",
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal! 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '👉 MessiasNunesMaia.design/doctorcare' },
    ],
    publishedAt: new Date('2024-07-10 21:16')
  }
];

const App = () => {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              post={post}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;

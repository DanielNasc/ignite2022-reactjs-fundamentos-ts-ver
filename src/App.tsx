import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css"

const posts = [
  {
    id: 1,
    author: {
      name: "Daniel Nasc",
      avatarUrl: "https://github.com/danielnasc.png",
      role: "Student"
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋"
      }, {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      }, {
        type: "link",
        content: "jane.design/doctorcare"
      }
    ],
    publishedAt: new Date("2022-06-06 12:00:00")
  }, {
    id: 2,
    author: {
      name: "Diego Fernandes",
      avatarUrl: "https://github.com/diego3g.png",
      role: "Educator @Rocketseat"
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋"
      }, {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      }, {
        type: "link",
        content: "jane.design/doctorcare"
      }
    ],
    publishedAt: new Date("1503-04-02 12:00:00")
  }
]

export function App() {
  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {
            posts.map(post => 
              <Post 
                key={post.id} 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          }
        </main>
      </div>
    </div>
  )
}


import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (  
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Rebeca Albuquerque"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, soluta dolorum. Nobis saepe fugit commodi molestias eius magnam facere veritatis mollitia architecto? Ducimus enim accusamus labore. Hic cum delectus sequi."
          />
          <Post />
        </main>
      </div>
    </div>
  );
} 


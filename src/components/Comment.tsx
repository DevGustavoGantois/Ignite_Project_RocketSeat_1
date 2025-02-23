//import css modules
import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './comment.module.css';

//import components
import { Avatar } from './Avatar';
import { useState } from 'react';


interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {

    const [LikeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {

     onDeleteComment(content);
        
    }

    function handleLikeComment() {
          setLikeCount((state) => {
            return state + 1;
          })
     }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/devgustavogantois.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gustavo Gantois</strong>
                            <time title='17 de Julho às 23:48' dateTime="2024-07-17T23:49:30">Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
               <button onClick={handleLikeComment}>
                    <ThumbsUp/>
                    Aplaudir <span>{LikeCount}</span>
                </button>
            </footer>
            </div>
        </div>
    )
}
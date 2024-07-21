// Import CSS modules
import styles from './post.module.css';
import { Avatar } from './Avatar';
import { Comment } from './Comment';

// Import date-fns
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react';

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

export interface PostType {
    id: number;
    author: Author;
    publisedAt: Date;
    content: Content[];
}

interface PostProps {
    post: PostType;
}

// Estado = variáveis que eu quero que o componente monitore;

export function Post({ post }: PostProps) {
    const [comments, setComments] = useState(['Post muito bacana, hein?!']);
    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLL 'às' HH:mm 'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse Campo é Obrigatório.');
    }

    function deleteComment(commentToDelete: string) {
        const commentsWithoutDeletedOne = comments.filter(comment => comment !== commentToDelete);
        setComments(commentsWithoutDeletedOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {post.content.map((line) => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>;
                    }
                    return null;
                })}

                <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>
                    <textarea
                        onChange={handleNewCommentChange}
                        value={newCommentText}
                        onInvalid={handleNewCommentInvalid}
                        required
                        placeholder="Deixe um comentário"
                        name="comment"
                    />
                    <footer>
                        <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                    </footer>
                </form>
                <div className={styles.commentList}>
                    {comments.map((comment) => (
                        <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
                    ))}
                </div>
            </div>
        </article>
    );
}

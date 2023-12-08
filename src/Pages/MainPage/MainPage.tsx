import styles from './MainPage.module.scss';
import { useRef, useState } from 'react';
import {
  DefaultButton,
  IButtonProps,
  IComboBoxOption,
  IconButton,
  SelectableOptionMenuItemType,
  TeachingBubble,
  TextField,
} from '@fluentui/react';
import { AIInsights } from './AIInsights/AIInsights';
import { TopSection } from '../../SharedComponents/TopSection/TopSection';
import { useId } from '@fluentui/react-hooks';
import { ThumbsUp, ThumbsDown } from 'fluent-emoji'

const sessionOptions: IComboBoxOption[] = [
  { key: 'Header1', text: 'This month', itemType: SelectableOptionMenuItemType.Header },
  { key: 'A', text: 'Session A' },
  { key: 'B', text: 'Session B' },
  { key: 'C', text: 'Session C' },
  { key: 'D', text: 'Session D' },
  { key: 'divider', text: '-', itemType: SelectableOptionMenuItemType.Divider },
  { key: 'Header2', text: 'Last month', itemType: SelectableOptionMenuItemType.Header },
  { key: 'E', text: 'Session E' },
  { key: 'F', text: 'Session F', disabled: true },
  { key: 'G', text: 'Session G' },
  { key: 'H', text: 'Session H' },
];
const pupilOptions: IComboBoxOption[] = [
  { key: 'Sarah', text: 'Sarah' },
  { key: 'Andrea', text: 'Andrea' },
  { key: 'Cassandra', text: 'Cassandra' },
];


export function MainPage() {
  const [session, setSession] = useState("");
  const [pupil, setPupil] = useState(pupilOptions?.[0].key);
  const [expandAISection, setExpandAISection] = useState(true);
  const [commentAISection, setCommentAISection] = useState(false);
  const [activeComment, setActiveComment] = useState("");
  const [commentsInAiSection, setCommentsInAiSection] = useState<string[]>([]);
  const [expandMapSection, setExpandMapSection] = useState(true);
  const targetButton = useRef<HTMLDivElement>(null);
  const buttonId = useId('targetButton');

  const buttonProps: IButtonProps = {
    text: 'Save',
    onClick: () =>{
      setCommentAISection(false);
      if(!!activeComment){
        setCommentsInAiSection(commentsInAiSection?.concat([activeComment]));
      }
      setActiveComment("");
    } 
  };
  
  const buttonPropsCancel: IButtonProps = {
    text: 'Cancel',
    onClick: () =>{
      setCommentAISection(false);
      setActiveComment("");
    } 
  };

  return (
     <div>
      <TopSection 
        Session={session}
        SetSession={setSession}
        SetPupil={setPupil}
        Pupil={pupil}
        PupilOptions={pupilOptions}
        SessionOptions={sessionOptions}
      />
      <div className={styles.mainBody}>
        <div className={styles.contentsOfMainBody}>
          <div className={styles.welcomingSection}>
            <h1>Hello {pupil}</h1>
            <>Follow {pupil}'s progress and be part of his/her journey.</>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTop}>
              <h3 className={styles.cardSectionTitle}>Search session locations</h3>
              <IconButton
                iconProps={{ iconName: expandMapSection? 'ChevronDown' : 'ChevronUp' }}
                aria-label="collapse/expand"
                onClick={() => setExpandMapSection(!expandMapSection)}
              />
            </div>
{/*             {expandMapSection &&
              (
                <MapSearch />
              )
            } */}
          </div>
          <div className={styles.card}>
            <div className={styles.cardTop}>
              <h3 className={styles.cardSectionTitle}>AI</h3>
              <div className={styles.actionsInCard}>
                <div className={'buttonContainer'} ref={targetButton}>
                  <DefaultButton
                    id={buttonId}
                    onClick={() => setCommentAISection(!commentAISection)}
                    text={commentAISection ? 'Hide comment' : `Show comments ${commentsInAiSection.length}` } />
                </div>
                {commentAISection && (
                  <TeachingBubble
                    target={`#${buttonId}`}
                    primaryButtonProps={buttonProps}
                    secondaryButtonProps={buttonPropsCancel}
                    onDismiss={() => setCommentAISection(!commentAISection)}
                    headline="Comment on this section"
                    calloutProps={{preventDismissOnEvent:()=> {return true}}}                    
                  >
                    {commentsInAiSection.map(function(comment) {
                        return (
                          <div>
                            {comment}
                            {((comment.includes("thumbs") && comment.includes("up")) || comment.includes("I like")) && <ThumbsUp className={styles.emoji}/>}
                            {((comment.includes("thumbs") && comment.includes("down")) || comment.includes("I do not like")) && <ThumbsDown className={styles.emoji}/>}
                          </div>
                        )
                      })}
                    <TextField multiline rows={3} value={activeComment} onChange={(e,value) => setActiveComment(value||"")} />
                </TeachingBubble>
                )}
                <IconButton
                  iconProps={{ iconName: expandAISection? 'ChevronDown' : 'ChevronUp' }}
                  aria-label="collapse/expand"
                  onClick={() => setExpandAISection(!expandAISection)}
                />
              </div>
            </div>
            {expandAISection &&
              (
                <AIInsights />
              )
            }
          </div>
          <div className={styles.card}>
            <div className={styles.cardTop}>
              <h3 className={styles.cardSectionTitleBorderTurquoise}>FACILITATOR FEEDBACK</h3>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardTop}>
              <h3 className={styles.cardSectionTitleBorderGreen}>SELF EVALUATION</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
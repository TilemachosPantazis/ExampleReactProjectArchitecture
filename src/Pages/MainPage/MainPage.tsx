import styles from './MainPage.module.scss';
import { useState } from 'react';
import {
  IComboBoxOption,
  IconButton,
  SelectableOptionMenuItemType,
} from '@fluentui/react';
import { AIInsights } from './AIInsights/AIInsights';
import { TopSection } from '../../SharedComponents/TopSection/TopSection';

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
              <h3 className={styles.cardSectionTitle}>AI</h3>
              <IconButton
                iconProps={{ iconName: expandAISection? 'ChevronDown' : 'ChevronUp' }}
                aria-label="collapse/expand"
                onClick={() => setExpandAISection(!expandAISection)}
              />
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
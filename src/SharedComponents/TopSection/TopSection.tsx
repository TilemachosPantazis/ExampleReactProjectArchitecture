import { Dropdown, IComboBoxOption, IDropdownOption, Icon } from '@fluentui/react';
import styles from './TopSection.module.scss';
import { FormEvent } from 'react';


export interface ITopSectionProps {
    Session: string;
    SetSession: (value: string) => void;
    SessionOptions: IComboBoxOption[];
    Pupil: string | number;
    SetPupil: (value: string) => void;
    PupilOptions:  IComboBoxOption[];
}

export function TopSection(props: ITopSectionProps) {

    const onRenderPlaceholder = () => {
        return (
          <div className={styles.placeholderWrapper}>
            <Icon iconName={'Clock'} className={styles.clockIcon} aria-hidden="true" />
            <div className={styles.placeholder}>Select session</div>
          </div>
        );
      }
      
    return (
        <div className={styles.topSection}>
            <img className={styles.logoIcon} src={'_assets/images/Logo.jpg'} alt="Logo" />
            <div className={styles.sessionSelection}>
            <Dropdown
                selectedKey={props.Session}
                options={props.SessionOptions}
                onRenderPlaceholder={onRenderPlaceholder}
                onChange={(event: FormEvent<HTMLDivElement>, option?: IDropdownOption) => props.SetSession((option?.key || '').toString())}
                styles={{
                title: styles.dropdownStyles
                }}
            />
            <Dropdown
                selectedKey={props.Pupil}
                options={props.PupilOptions}
                onRenderPlaceholder={onRenderPlaceholder}
                onChange={(event: FormEvent<HTMLDivElement>, option?: IDropdownOption) => props.SetPupil((option?.key || '').toString())}
                styles={{
                title: styles.dropdownStyles
                }}
            />  
            </div>
      </div>
    );
}
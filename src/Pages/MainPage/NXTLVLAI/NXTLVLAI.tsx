
import { DefaultButton, Icon, Spinner } from '@fluentui/react';
import styles from './NXTLVLAI.module.scss';
import { Graph } from '../../../SharedComponents/Graph/Graph';
import { useCallback, useState } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch } from 'react-redux';
import { exampleAction } from '../Utils/MainPageActions';
import { FilterOptions, IFilterOptions } from '../../../SharedModels/FilterModels';
import { useSelector } from 'react-redux';
import { getDataHasBeenLoadedSelector } from '../Utils/MainPageSelectors';

export function NXTLVLAI() {
    const [filter, setFilterContent] = useState(new FilterOptions());
    const dispatch = useDispatch();
    const dataIsLoaded = useSelector(getDataHasBeenLoadedSelector);

    const setFilter = useCallback((filter: IFilterOptions) => {
        setFilterContent(filter);
        dispatch(exampleAction(filter));
    },[setFilterContent, dispatch]);
    
    return (
        <div>
            <div className={styles.graphSection}>
                <div className={styles.graphInsights}>
                <div className={styles.overviewWithIcon}>
                    <Icon iconName='LightBulb'></Icon>
                    <div>Skills overview</div>
                </div>
                <div className={styles.mainInsight}>Talk time:
                    <div className={styles.fontBlue}>15 min</div>
                </div>
                </div>
                <Graph/>
            </div>
            <div className={styles.highlightsSection}>
                <h3 className={styles.cardSectionTitle}>LAST SESSION HIGHLIGHTS</h3>
                <h4>AI Filters</h4>
                <div className={styles.filters}>
                    <div className={styles.filtersColumn}>
                        <DefaultButton
                        className={filter.Leadership ? styles.selectedFilter : styles.unselectedFilter}
                        text="Leadership"
                        onClick={() => setFilter({...filter, Leadership: !filter.Leadership})}
                        />
                        <DefaultButton
                        className={filter.Communication ? styles.selectedFilter : styles.unselectedFilter} 
                        text="Communication"
                        onClick={() => setFilter({...filter, Communication: !filter.Communication})}
                        />
                        <DefaultButton
                        className={filter.Collaboration ? styles.selectedFilter : styles.unselectedFilter} 
                        text="Collaboration"
                        onClick={() => setFilter({...filter, Collaboration: !filter.Collaboration})}
                        />
                    </div>
                    <div className={styles.filtersColumn}>
                        <DefaultButton
                        className={filter.SelfAwareness ? styles.selectedFilter : styles.unselectedFilter} 
                        text="SelfAwareness"
                        onClick={() => setFilter({...filter, SelfAwareness: !filter.SelfAwareness})}
                        />
                        <DefaultButton
                        className={filter.TeamWork ? styles.selectedFilter : styles.unselectedFilter} 
                        text="TeamWork"
                        onClick={() => setFilter({...filter, TeamWork: !filter.TeamWork})}
                        />
                        <DefaultButton
                        className={filter.Recilience ? styles.selectedFilter : styles.unselectedFilter} 
                        text="Recilience"
                        onClick={() => setFilter({...filter, Recilience: !filter.Recilience})}
                        />
                    </div>
                </div>
                {dataIsLoaded ? 
                    <div className={styles.mostUsed}>
                        <h5>MOST USED SENTENCES</h5>
                        <ul>
                            <li>I have an idea. Lets try...</li>
                            <li>Let's make a plan</li>
                            <li>Let's work together</li>
                        </ul>
                    </div>
                    : <Spinner/>
                }
                <div className='player-wrapper'>
                    <ReactPlayer
                        className='react-player fixed-bottom'
                        url= '_assets/videos/video.MP4'
                        width='100%'
                        height='100%'
                        controls = {true}
                    />
                </div>
            </div>
        </div>
    )
}
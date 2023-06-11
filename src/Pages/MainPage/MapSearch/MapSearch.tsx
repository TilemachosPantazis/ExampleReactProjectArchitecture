import { Callout,  IconButton, SearchBox, Spinner } from "@fluentui/react";
import { useCallback, useState } from "react";
import styles from './MapSearch.module.scss';
import { AuthenticationType, AzureMap, AzureMapsProvider, IAzureMapOptions } from "react-azure-maps";
import { Text } from '@fluentui/react';
import { useDispatch, useSelector } from "react-redux";
import { useBoolean, useId } from '@fluentui/react-hooks';
import { getAddressAction } from "../Utils/MainPageActions";
import { addressSelector, getAddressLoadedSelector } from "../Utils/MainPageSelectors";

const defaultCenter = [23.792072, 38.033211];

const option: IAzureMapOptions = {
    authOptions: {
        authType: AuthenticationType.subscriptionKey,
        subscriptionKey:"29Ecjm7r-UtK4eHQLbdI_tsuj1KpU7t9BCjdGzndbc8" // Your subscription key
    },
    zoom: 18,
    view: 'Auto',
    showLogo: false
}

export function MapSearch() {
    const [isCalloutVisible, { toggle: toggleIsCalloutVisible }] = useBoolean(false);
    const buttonId = useId('callout-button');
    const labelId = useId('callout-label');
    const descriptionId = useId('callout-description');

    const [address, setAddress] = useState('');
    const dispatch = useDispatch();
    const fullAddresses: any[] = useSelector(addressSelector);
    const addressesHaveBeenLoaded: boolean = useSelector(getAddressLoadedSelector);
    const search = useCallback(() => {
        dispatch(getAddressAction(address));
    },[address, dispatch]);
  
    return (
        <div className={styles.mapWrapper}>
            <div className={styles.searchBar}>
                <SearchBox className={styles.searchBox} placeholder="Search" onChange={(event, newValue) => setAddress(newValue || '')} onClear={() => setAddress("")} onSearch={search}/>
                <IconButton
                    iconProps={{ iconName: 'Search' }}
                    aria-label="search"
                    onClick={() => search()}
                />
                <IconButton
                    id={buttonId}
                    onClick={toggleIsCalloutVisible}
                    iconProps={{ iconName: 'Info' }}
                />
                {isCalloutVisible && (
                    <Callout
                        className={styles.callout}
                        ariaLabelledBy={labelId}
                        ariaDescribedBy={descriptionId}
                        role="dialog"
                        gapSpace={0}
                        target={`#${buttonId}`}
                        onDismiss={toggleIsCalloutVisible}
                        setInitialFocus
                    >
                    <Text>
                        Comma separate your values and use a country for better results. 
                        Example: "Andrea Papandreou 4, 431 31, Karditsa, Greece"
                    </Text>

                </Callout>)}
            </div>
            <div style={{height: '500px'}}>
            {!addressesHaveBeenLoaded ?
                <Spinner/>
                :
                <AzureMapsProvider>
                    <AzureMap options={{...option, center: (!!fullAddresses && fullAddresses.length !== 0)? [fullAddresses[0]?.position?.lon,  fullAddresses[0]?.position?.lat]: defaultCenter}}>
                    </AzureMap>
                </AzureMapsProvider>
            }
            </div>
        </div>
    );
}
import React, { useCallback } from 'react'
import { Image, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { useFocusEffect } from '@react-navigation/native'
import TouchableWrapper from '../../components/global/layout/TouchableWrapper'
import DefaultPage from '../../components/DefaultPage'
import NeoStormLogo from '../../../assets/neostorm-logo.png'

const SceneSplash = ({ navigation }) => {
    useFocusEffect(
        useCallback(() => {
            const delayedNavigation = setTimeout(() => {
                navigation.navigate('Login')
            }, 2000)
            return () => clearTimeout(delayedNavigation)
        }, [])
    )
    return (
        <TouchableWrapper handlePress={() => navigation.navigate('Login')}>
            <DefaultPage>
                <Image
                    style={{ width: 150, height: 120 }}
                    source={NeoStormLogo}
                />
                <View>
                    <Text style={{ fontSize: 23, marginTop: 80 }}>
                        by Konrad Abe
                    </Text>
                </View>
            </DefaultPage>
        </TouchableWrapper>
    )
}

SceneSplash.propTypes = {
    navigation: PropTypes.object.isRequired,
}

export default SceneSplash

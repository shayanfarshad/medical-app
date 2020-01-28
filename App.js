import React, {Component} from 'react';
import {View, Text} from 'react-native';
// import {Icon} from 'native-base';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {NavigationNativeContainer} from '@react-navigation/native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {Transition} from 'react-native-reanimated';
import {createStackNavigator} from 'react-navigation-stack';
import {ConsultationScreen} from './components/AppStack/Consultation/ConsultationScreen';
import {LaboratoryScreen} from './components/AppStack/Laboratory/LaboratoryScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {HomeScreen} from './components/AppStack/HomeScreen';
import {Doctors} from './components/AppStack/Doctors/Doctors';
import {Vaccinations} from './components/AppStack/Vaccinations/Vaccinations';
import {DrugStore} from './components/AppStack/DrugStore/DrugStore';
import {LoginScreen} from './components/AuthStack/LoginScreen';
import {LoadScreen} from './components/LoadScreen';
import {LabDetailsScreen} from './components/AppStack/Laboratory/LabDetailsScreen';
import {StoreDetailsScreen} from './components/AppStack/DrugStore/StoreDetailsScreen';
import{VacDetailsScreen} from './components/AppStack/Vaccinations/VacDetailsScreen';
import {ConDetailsScreen} from './components/AppStack/Consultation/ConDetailsScreen';
import {DocDetailsScreen} from './components/AppStack/Doctors/DocDetailsScreen';
import {NotifScreen} from './components/AppStack/NotifScreen';
import {TimerScreen} from './components/AppStack/TimerScreen';
import {Header} from './components/AppStack/Header';
import {ChatScreen} from './components/AppStack/ChatScreen';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        let oldRender = Text.render;
        Text.render = function (...args) {
            let origin = oldRender.call(this, ...args);
            return React.cloneElement(origin, {
                style: [{fontFamily: 'Comfortaa-Medium'}, origin.props.style],
            });
        };
    }


    render() {
        return (
            <SafeAreaProvider>
                <AppContainer/>
            </SafeAreaProvider>
        );
    }
}

const TabNavigator = createMaterialTopTabNavigator({
        Consultation: ConsultationScreen,
        Doctors: Doctors,
        Laboratory: LaboratoryScreen,
        DrugStore: DrugStore,
        Vaccinations: Vaccinations,
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let IconComponent = FontAwesome5;
                let iconName;
                if (routeName === 'Consultation') {
                    iconName = 'comment-medical';
                    // IconComponent = ConsultationIconWithBadge;
                } else if (routeName === 'Doctors') {
                    iconName = 'user-md';
                } else if (routeName === 'Laboratory') {
                    iconName = 'microscope';
                } else if (routeName === 'DrugStore') {
                    iconName = 'pills';
                } else if (routeName === 'Vaccinations') {
                    iconName = 'syringe';
                }
                return (
                    <IconComponent name={iconName} style={{fontSize: 25}} color={tintColor}/>
                );
                // You can return any component that you like here!
            },
            tabBarPosition: 'bottom',
        }),
        tabBarOptions: {
            activeTintColor: '#6ecdf5',
            inactiveTintColor: '#4f4e4e',
            showLabel: true,
            swipeEnabled: true,
            showIcon: true,
            labelStyle: {
                fontSize: 6,
                fontFamily: 'Comfortaa-Bold',
            },
            iconStyle: {
                width: '100%',
            },
            indicatorStyle: {
                opacity: 0,
            },

            style: {
                width: '100%',
                flex:0.1,
                justifyContent: 'center',
                backgroundColor: 'white',
                // height: 80,
                borderTopWidth:0,
                elevation: 8,
                shadowColor: '#000000',
                shadowOpacity: 0.8,
                shadowRadius: 2,
                shadowOffset: {
                    height: 1,
                    width: 1,
                },
            },
        },

    },
);

const AuthStack = createStackNavigator({
        Login: LoginScreen,
    },
    {
        headerMode: 'none',
    },
);
const AppStack = createStackNavigator({
        Home: HomeScreen,
        LabDetails : LabDetailsScreen,
        StoreDetails : StoreDetailsScreen,
        VacDetails: VacDetailsScreen,
        DocDetails: DocDetailsScreen,
        ConDetails : ConDetailsScreen,
        notifScreen : NotifScreen ,
        timerScreen : TimerScreen,
        chatScreen : ChatScreen,
        header: Header,
        Tab: TabNavigator,
    },
    {
        headerMode: 'none',
    });
const AppContainer = createAppContainer(createAnimatedSwitchNavigator(
    {
        Load: LoadScreen,
        Auth: AuthStack,
        App: AppStack,
    },
    {
        initialRouteName: 'Load',
        // The previous screen will slide to the bottom while the next screen will fade in
        transition: (
            <Transition.Together>
                <Transition.Out
                    type="slide-bottom"
                    durationMs={400}
                    interpolation="easeIn"
                />
                <Transition.In type="fade" durationMs={500}/>
            </Transition.Together>
        ),
    },
));
export default App;

import React from 'react'
import {connect} from 'react-redux'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { WebBrowser } from 'expo'
import MainView from '../../components/main'
import {Button, Text, Toast} from 'native-base';
import convencoes from '../../../assets/img/seu-sindicato/Botoes-separados_Prancheta-10.png'
import news from '../../../assets/img/seu-sindicato/Botoes-separados-01.png'
import faleConosco from '../../../assets/img/seu-sindicato/Botoes-separados-03.png'
import beneficios from '../../../assets/img/seu-sindicato/Botoes-separados-02.png'
import coloniaFerias from '../../../assets/img/seu-sindicato/Botoes-ferias.png'
import premios from '../../../assets/img/seu-sindicato/Botoes-premios.png'
import seuSindicato from '../../../assets/img/seu-sindicato.png'
import presenteVida from '../../../assets/img/presente-vida.png'
import setaSair from '../../../assets/icons/seta-sair.png'
import {getUserFromToken, logout} from "../../thunks/auth"
import _get from 'lodash/get'

const styles = StyleSheet.create({
    mt: {
        marginVertical: 10
    },
    paddingH: {
        paddingHorizontal: 16,
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 1,
    },
    white: {
        color: 'white',
        textAlign: 'center',
    },
    primary: {
        color: '#020F50',
        textAlign: 'center',
        paddingVertical: 20
    },
    button: {
        flexDirection: 'column',
        marginVertical: 16,
        backgroundColor: '#020F50',
        paddingVertical: 12
    },
    escolhaBox: {
        paddingHorizontal: 4,
        paddingVertical: 4,
        display: 'flex',
        width: '50%',
        height: 115
    },
    escolhaNews: {
        backgroundColor: '#F9B208'
    },
    escolhaBeneficios: {
        backgroundColor: '#01669C'
    },
    escolhaFale: {
        backgroundColor: '#0095C5'
    },
    escolhaConvencoes: {
        backgroundColor: '#E95B10'
    },
    escolhaFerias: {
        backgroundColor: '#f5a000'
    },
    escolhaPremios: {
        backgroundColor: '#0095c5'
    },
    boxImg: {
        display: 'flex',
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    boxImgFerias: {
        backgroundColor: '#f5a000'
    },
    boxImgPremios: {
        backgroundColor: '#0095c5'
    },
    carteirinhaBtn: {
        display: 'flex',
        width: '100%',
        backgroundColor: '#1D2440',
        alignItems: 'center'
    },
    carteirinhaText: {
        fontSize: 16,
        fontFamily: 'roboto-medium',
        textAlign: 'center',
        color: 'white',
        width: '100%'
    },
    fraseImg: {
        width: '80%',
        height: 60,
        resizeMode: 'contain',
        justifyContent: 'flex-end'
    }
})

class MemberIndex extends React.Component {
    componentDidMount() {
        this.props.getUserFromToken()
    }

    handleClickCarteirinha = () => {
        console.log(this.props);
        return WebBrowser.openBrowserAsync('https://www.seusindicato.com.br/carteirinha/' + this.props.user.id)
    }
    handleLogout = () => {
        this.props.logout(this.props.navigation)
    }
    handleClickBenefits = () => this.props.navigation.navigate('MemberSindicalAuthorization')
    handlePressFeatures = () => Toast.show({
        text: 'Esta função será liberada em breve!',
        duration: 4000
    })
    handleClickConvencoes = () => WebBrowser.openBrowserAsync('https://www.seusindicato.com.br/sindicatos/'+ this.props.user.id + '/convencoes')
    handleClickNoticias = () => WebBrowser.openBrowserAsync('https://www.seusindicato.com.br/sindicatos/'+ this.props.user.sindicato_id + '/noticias')
    handleTalkToUs = () => WebBrowser.openBrowserAsync('https://www.seusindicato.com.br/faleconosco/'+ this.props.user.sindicato_id )

    render () {
        const {user} = this.props

        const sindicateName = _get(user, 'sindicato.nome', null)

        return (
            <MainView>
                <View style={[styles.paddingH, styles.mt]}>
                    { sindicateName && <Text uppercase style={styles.primary}>{sindicateName}</Text> }

                    <View style={{ flexDirection: 'row', marginTop: 8, display: 'flex', width: '100%' }}>
                        <View style={styles.escolhaBox}>
                            <TouchableOpacity
                                onPress={this.handleClickNoticias}
                                style={styles.escolhaNews}>
                                <Image source={news} style={styles.boxImg}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.escolhaBox}>
                            <TouchableOpacity
                                onPress={this.handleClickBenefits}
                                style={styles.escolhaBeneficios}>
                                <Image source={beneficios} style={styles.boxImg}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={styles.escolhaBox}>
                            <TouchableOpacity
                                onPress={this.handleTalkToUs}
                                style={styles.escolhaFale}>
                                <Image source={faleConosco} style={styles.boxImg}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.escolhaBox}>
                            <TouchableOpacity
                                onPress={this.handleClickConvencoes}
                                style={styles.escolhaConvencoes}>
                                <Image source={convencoes} style={styles.boxImg}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={[styles.escolhaBox]}>
                            <Image source={coloniaFerias} style={[styles.boxImg, styles.boxImgFerias]}/>
                        </View>
                        <View style={styles.escolhaBox}>
                            <Image source={premios} style={[styles.boxImg, styles.boxImgPremios]}/>
                        </View>
                    </View>
                </View>

                <View style={[styles.paddingH, styles.mt]}>
                    <View style={{ marginTop: 8, paddingHorizontal: 4 }}>
                        <Button onPress={this.handleClickCarteirinha} style={styles.carteirinhaBtn}>
                            <Text uppercase style={styles.carteirinhaText}>Carteirinha</Text>
                        </Button>
                    </View>
                </View>

                <View style={{ paddingHorizontal: 16, marginTop: 8, display: 'flex', width: '100%', flexDirection: 'row' }}>
                    <View style={{ width: '45%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <Image source={seuSindicato} style={styles.fraseImg} />
                    </View>
                    <View style={{ width: '55%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', paddingRight: 10 }}>
                        <Image source={presenteVida} style={styles.fraseImg} />
                    </View>
                </View>

                <View style={{ paddingHorizontal: 16, marginTop: 15, display: 'flex', width: '100%', justifyContent: 'flex-start' }}>
                    <Button
                        transparent
                        block
                        onPress={this.handleLogout}
                        style={{ justifyContent: 'flex-start', display: 'flex' }}
                        >
                        <Image source={setaSair} />
                        <Text style={{ color: '#000', fontSize: 22 }}>SAIR</Text>
                    </Button>
                </View>
            </MainView>
        )
    }
}

MemberIndex.navigationOptions = {
  header: null,
}

const mapStateToProps = state => ({
  user: state.auth.current
})

export default connect(mapStateToProps, {getUserFromToken, logout})(MemberIndex)

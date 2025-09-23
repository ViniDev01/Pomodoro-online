import React, {useState, useEffect} from "react";
import { ArrowLeft, ArrowUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Lista({ negrito, info }) {
  return (
    <li className="mb-2">
      <p className="text-gray-700">
        <strong className="font-semibold text-gray-900">{negrito}</strong> {info}
      </p>
    </li>
  );
}

export default function PoliticaDePrivacidade() {
  const navigate = useNavigate();
  const [visibleScroll, setVisibleScroll] = useState(false);
  function navegar() {
    navigate("/Pomodoro-online");
  }

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 150) {
        setVisibleScroll(true);
      } else {
        setVisibleScroll(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  
  return (
    <div className="w-full bg-white">
      <ArrowLeft className="fixed top-4 left-4 cursor-pointer" onClick={navegar}/>
      {visibleScroll && (
        <ArrowUp className="fixed bottom-4 right-4 cursor-pointer" onClick={() => window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })}/>
      )}
      
    <div className="container mx-auto px-4 py-8 max-w-4xl bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Política de Privacidade</h1>
      <p className="text-sm text-gray-500 mb-4">Última atualização: 23 de setembro de 2025</p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Esta Política de Privacidade descreve Nossas políticas e procedimentos
        sobre a coleta, uso e divulgação de Suas informações quando Você usa o
        Serviço e informa sobre Seus direitos de privacidade e como a lei o
        protege.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Usamos Seus Dados Pessoais para fornecer e melhorar o Serviço. Ao usar o
        Serviço, Você concorda com a coleta e uso de informações de acordo com
        esta Política de Privacidade. Esta Política de Privacidade foi criada
        com a ajuda do{" "}
        <a
          href="https://www.privacypolicies.com/privacy-policy-generator/"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          Gerador de Política de Privacidade
        </a>
        .
      </p>
      <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">Interpretação e Definições</h2>
      <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">Interpretação</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        As palavras cujas letras iniciais são maiúsculas têm significados
        definidos sob as seguintes condições. As seguintes definições terão o
        mesmo significado, independentemente de aparecerem no singular ou no
        plural.
      </p>
      <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">Definições</h3>
      <p className="text-gray-700 leading-relaxed mb-4">Para os fins desta Política de Privacidade:</p>
      <ul className="space-y-4">
        <Lista
          negrito="Conta"
          info="significa uma conta única criada para que Você acesse nosso Serviço ou partes de nosso Serviço."
        />
        <Lista negrito="Afiliada" info='significa uma entidade que controla, é controlada por, ou está sob controle comum com uma parte, onde "controle" significa a propriedade de 50% ou mais das ações, participação societária ou outros títulos com direito a voto para a eleição de diretores ou outra autoridade de gestão.' />
        <Lista negrito="Empresa" info='(referida como "a Empresa", "Nós", "Nosso" ou "Nossa" neste Contrato) refere-se a Timmer Pomodoro Online.' />
        <Lista negrito="Cookies" info='são pequenos arquivos que são colocados em Seu computador, dispositivo móvel ou qualquer outro dispositivo por um site, contendo os detalhes de Seu histórico de navegação nesse site entre muitos de seus usos.' />
        <Lista negrito="País" info='refere-se a: Brasil' />
        <Lista negrito="Dispositivo" info='significa qualquer dispositivo que possa acessar o Serviço, como um computador, um celular ou um tablet digital.' />
        <Lista negrito="Dados Pessoais" info='são quaisquer informações que se relacionam a um indivíduo identificado ou identificável.' />
        <Lista negrito="Serviço" info='refere-se ao Website.' />
        <Lista negrito="Provedor de Serviço" info='significa qualquer pessoa física ou jurídica que processe os dados em nome da Empresa. Refere-se a empresas terceirizadas ou indivíduos empregados pela Empresa para facilitar o Serviço, para fornecer o Serviço em nome da Empresa, para realizar serviços relacionados ao Serviço ou para ajudar a Empresa a analisar como o Serviço é usado.' />
        <Lista negrito="Serviço de Mídia Social de Terceiros" info='refere-se a qualquer site ou qualquer site de rede social através do qual um Usuário pode fazer login ou criar uma conta para usar o Serviço.' />
        <Lista negrito="Dados de Uso" info='referem-se a dados coletados automaticamente, gerados pelo uso do Serviço ou pela própria infraestrutura do Serviço (por exemplo, a duração da visita a uma página).' />
        <li className="mb-2">
          <p className="text-gray-700">
            <strong className="font-semibold text-gray-900">Website</strong> refere-se a Timmer Pomodoro Online, acessível em{" "}
            <a
              href="https://vinidev01.github.io/Pomodoro-online/"
              rel="external nofollow noopener"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              https://vinidev01.github.io/Pomodoro-online/
            </a>
          </p>
        </li>
        <Lista
          negrito="Você"
          info='significa o indivíduo que acessa ou usa o Serviço, ou a empresa ou outra entidade legal em nome da qual tal indivíduo está acessando ou usando o Serviço, conforme aplicável.'
        />
      </ul>
      <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">Coleta e Uso de Seus Dados Pessoais</h2>
      <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">Tipos de Dados Coletados</h3>
      <h4 className="text-xl font-bold text-gray-800 mt-4 mb-2">Dados Pessoais</h4>
      <p className="text-gray-700 leading-relaxed mb-4">
        Ao usar Nosso Serviço, podemos pedir que Você nos forneça certas
        informações de identificação pessoal que podem ser usadas para
        contatá-lo ou identificá-lo. As informações de identificação pessoal
        podem incluir, mas não se limitam a:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <p className="text-gray-700">Endereço de e-mail</p>
        </li>
        <li>
          <p className="text-gray-700">Primeiro nome e sobrenome</p>
        </li>
        <li>
          <p className="text-gray-700">Dados de Uso</p>
        </li>
      </ul>
      <h4 className="text-xl font-bold text-gray-800 mt-4 mb-2">Dados de Uso</h4>
      <p className="text-gray-700 leading-relaxed mb-4">Os Dados de Uso são coletados automaticamente ao usar o Serviço.</p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Os Dados de Uso podem incluir informações como o endereço de Protocolo
        de Internet do Seu Dispositivo (por exemplo, endereço IP), tipo de
        navegador, versão do navegador, as páginas de nosso Serviço que Você
        visita, a hora e a data de Sua visita, o tempo gasto nessas páginas,
        identificadores de dispositivo únicos e outros dados de diagnóstico.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Quando Você acessa o Serviço por meio de um dispositivo móvel, podemos
        coletar certas informações automaticamente, incluindo, mas não se
        limitando a, o tipo de dispositivo móvel que Você usa, o ID único do Seu
        dispositivo móvel, o endereço IP do Seu dispositivo móvel, o sistema
        operacional do Seu dispositivo móvel, o tipo de navegador de Internet
        móvel que Você usa, identificadores de dispositivo únicos e outros dados
        de diagnóstico.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Também podemos coletar informações que Seu navegador envia sempre que
        Você visita Nosso Serviço ou quando Você acessa o Serviço por meio de um
        dispositivo móvel.
      </p>
      <h4 className="text-xl font-bold text-gray-800 mt-4 mb-2">Informações de Serviços de Mídia Social de Terceiros</h4>
      <p className="text-gray-700 leading-relaxed mb-4">
        A Empresa permite que Você crie uma conta e faça login para usar o
        Serviço através dos seguintes Serviços de Mídia Social de Terceiros:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li className="text-gray-700">Google</li>
        <li className="text-gray-700">Facebook</li>
        <li className="text-gray-700">Instagram</li>
        <li className="text-gray-700">Twitter</li>
        <li className="text-gray-700">LinkedIn</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Se Você decidir se registrar por meio de ou nos conceder acesso a um
        Serviço de Mídia Social de Terceiros, podemos coletar Dados Pessoais que
        já estão associados à Sua conta do Serviço de Mídia Social de Terceiros,
        como Seu nome, Seu endereço de e-mail, Suas atividades ou Sua lista de
        contatos associada a essa conta.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Você também pode ter a opção de compartilhar informações adicionais com
        a Empresa por meio de Sua conta de Serviço de Mídia Social de Terceiros.
        Se Você optar por fornecer tais informações e Dados Pessoais, durante o
        registro ou de outra forma, Você está dando permissão à Empresa para
        usá-los, compartilhá-los e armazená-los de forma consistente com esta
        Política de Privacidade.
      </p>
      <h4 className="text-xl font-bold text-gray-800 mt-4 mb-2">Tecnologias de Rastreamento e Cookies</h4>
      <p className="text-gray-700 leading-relaxed mb-4">
        Usamos Cookies e tecnologias de rastreamento semelhantes para rastrear a
        atividade em Nosso Serviço e armazenar certas informações. As
        tecnologias de rastreamento que usamos incluem beacons, tags e scripts
        para coletar e rastrear informações e para melhorar e analisar Nosso
        Serviço. As tecnologias que usamos podem incluir:
      </p>
      <ul className="list-disc list-inside space-y-4">
        <li className="text-gray-700">
          <strong className="font-semibold text-gray-900">Cookies ou Cookies de Navegador.</strong> Um cookie é um
          pequeno arquivo colocado em Seu Dispositivo. Você pode instruir Seu
          navegador a recusar todos os Cookies ou a indicar quando um Cookie
          está sendo enviado. No entanto, se Você não aceitar Cookies, talvez
          não consiga usar algumas partes de nosso Serviço. A menos que você
          tenha ajustado a configuração do Seu navegador para que ele recuse
          Cookies, nosso Serviço pode usar Cookies.
        </li>
        <li className="text-gray-700">
          <strong className="font-semibold text-gray-900">Web Beacons.</strong> Certas seções de nosso Serviço e nossos
          e-mails podem conter pequenos arquivos eletrônicos conhecidos como web
          beacons (também referidos como gifs transparentes, tags de pixel e
          gifs de pixel único) que permitem à Empresa, por exemplo, contar os
          usuários que visitaram essas páginas ou abriram um e-mail e para
          outras estatísticas relacionadas ao site (por exemplo, registrar a
          popularidade de uma determinada seção e verificar a integridade do
          sistema e do servidor).
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Os Cookies podem ser "Persistentes" ou de "Sessão". Os Cookies
        Persistentes permanecem em Seu computador pessoal ou dispositivo móvel
        quando Você fica offline, enquanto os Cookies de Sessão são excluídos
        assim que Você fecha Seu navegador da web. Saiba mais sobre cookies no{" "}
        <a
          href="https://www.privacypolicies.com/blog/privacy-policy-template/#Use_Of_Cookies_Log_Files_And_Tracking"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          artigo do site Privacy Policies
        </a>
        .
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Usamos Cookies de Sessão e Persistentes para os fins estabelecidos
        abaixo:
      </p>
      <ul className="list-disc list-inside space-y-4">
        <li className="text-gray-700">
          <p>
            <strong className="font-semibold text-gray-900">Cookies Necessários / Essenciais</strong>
          </p>
          <p>Tipo: Cookies de Sessão</p>
          <p>Administrado por: Nós</p>
          <p>
            Finalidade: Esses Cookies são essenciais para fornecer a Você os
            serviços disponíveis através do Website e para permitir que Você use
            alguns de seus recursos. Eles ajudam a autenticar usuários e a
            prevenir o uso fraudulento de contas de usuário. Sem esses Cookies,
            os serviços que Você solicitou não podem ser fornecidos, e Nós
            usamos esses Cookies apenas para fornecer a Você esses serviços.
          </p>
        </li>
        <li className="text-gray-700">
          <p>
            <strong className="font-semibold text-gray-900">Cookies de Política / Aceitação de Aviso</strong>
          </p>
          <p>Tipo: Cookies Persistentes</p>
          <p>Administrado por: Nós</p>
          <p>
            Finalidade: Esses Cookies identificam se os usuários aceitaram o uso
            de cookies no Website.
          </p>
        </li>
        <li className="text-gray-700">
          <p>
            <strong className="font-semibold text-gray-900">Cookies de Funcionalidade</strong>
          </p>
          <p>Tipo: Cookies Persistentes</p>
          <p>Administrado por: Nós</p>
          <p>
            Finalidade: Esses Cookies nos permitem lembrar as escolhas que Você
            faz quando usa o Website, como lembrar seus detalhes de login ou
            preferência de idioma. A finalidade desses Cookies é fornecer a Você
            uma experiência mais pessoal e evitar que Você tenha que reinserir
            suas preferências toda vez que usar o Website.
          </p>
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Para mais informações sobre os cookies que usamos e suas escolhas em
        relação aos cookies, por favor, visite nossa Política de Cookies ou a
        seção de Cookies de nossa Política de Privacidade.
      </p>
      <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">Uso de Seus Dados Pessoais</h3>
      <p className="text-gray-700 leading-relaxed mb-4">A Empresa pode usar Dados Pessoais para os seguintes fins:</p>
      <ul className="list-disc list-inside space-y-4">
        <li className="text-gray-700">
          <p>
            <strong className="font-semibold text-gray-900">Para fornecer e manter nosso Serviço</strong>, incluindo
            monitorar o uso de nosso Serviço.
          </p>
        </li>
        <li className="text-gray-700">
          <p>
            <strong className="font-semibold text-gray-900">Para gerenciar Sua Conta:</strong> para gerenciar Seu
            registro como usuário do Serviço. Os Dados Pessoais que Você fornece
            podem dar a Você acesso a diferentes funcionalidades do Serviço que
            estão disponíveis para Você como um usuário registrado.
          </p>
        </li>
        <li className="text-gray-700">
          <p>
            <strong className="font-semibold text-gray-900">Para a execução de um contrato:</strong> o desenvolvimento,
            cumprimento e realização do contrato de compra para os produtos,
            itens ou serviços que Você comprou ou de qualquer outro contrato
            conosco através do Serviço.
          </p>
        </li>
        <li className="text-gray-700">
          <p>
            <strong className="font-semibold text-gray-900">Para contatá-lo:</strong> Para contatá-lo por e-mail,
            ligações telefônicas, SMS ou outras formas equivalentes de
            comunicação eletrônica, como notificações push de um aplicativo
            móvel sobre atualizações ou comunicações informativas relacionadas
            às funcionalidades, produtos ou serviços contratados, incluindo as
            atualizações de segurança, quando necessário ou razoável para sua
            implementação.
          </p>
        </li>
        <li className="text-gray-700">
          <p>
            <strong className="font-semibold text-gray-900">Para fornecer a Você</strong> notícias, ofertas especiais e
            informações gerais sobre outros bens, serviços e eventos que
            Oferecemos que são semelhantes aos que você já comprou ou consultou,
            a menos que Você tenha optado por não receber tais informações.
          </p>
        </li>
        <li className="text-gray-700">
          <p>
            <strong className="font-semibold text-gray-900">Para gerenciar Suas solicitações:</strong> Para atender e
            gerenciar Suas solicitações a Nós.
          </p>
        </li>
        <li className="text-gray-700">
          <p>
            <strong className="font-semibold text-gray-900">Para transferências de negócios:</strong> Podemos usar Suas
            informações para avaliar ou conduzir uma fusão, alienação,
            reestruturação, reorganização, dissolução ou outra venda ou
            transferência de alguns ou de todos os Nossos ativos, seja como uma
            empresa em funcionamento ou como parte de uma falência, liquidação
            ou procedimento semelhante, no qual os Dados Pessoais mantidos por
            Nós sobre os usuários do nosso Serviço estão entre os ativos
            transferidos.
          </p>
        </li>
        <li className="text-gray-700">
          <p>
            <strong className="font-semibold text-gray-900">Para outros fins</strong>: Podemos usar Suas informações
            para outros fins, como análise de dados, identificação de tendências
            de uso, determinação da eficácia de nossas campanhas promocionais e
            para avaliar e melhorar nosso Serviço, produtos, serviços, marketing
            e sua experiência.
          </p>
        </li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-4">
        Podemos compartilhar Suas informações pessoais nas seguintes situações:
      </p>
      <ul className="list-disc list-inside space-y-4">
        <li className="text-gray-700">
          <strong className="font-semibold text-gray-900">Com Provedores de Serviço:</strong> Podemos compartilhar Suas
          informações pessoais com Provedores de Serviço para monitorar e
          analisar o uso de nosso Serviço, para contatá-lo.
        </li>
        <li className="text-gray-700">
          <strong className="font-semibold text-gray-900">Para transferências de negócios:</strong> Podemos compartilhar
          ou transferir Suas informações pessoais em conexão com, ou durante
          negociações de, qualquer fusão, venda de ativos da Empresa,
          financiamento ou aquisição de toda ou parte de Nosso negócio para
          outra empresa.
        </li>
        <li className="text-gray-700">
          <strong className="font-semibold text-gray-900">Com Afiliadas:</strong> Podemos compartilhar Suas informações
          com Nossas afiliadas, caso em que exigiremos que essas afiliadas
          honrem esta Política de Privacidade. As afiliadas incluem Nossa
          empresa-mãe e quaisquer outras subsidiárias, parceiros de joint
          venture ou outras empresas que controlamos ou que estão sob controle
          comum conosco.
        </li>
        <li className="text-gray-700">
          <strong className="font-semibold text-gray-900">Com parceiros de negócios:</strong> Podemos compartilhar Suas
          informações com Nossos parceiros de negócios para oferecer a Você
          certos produtos, serviços ou promoções.
        </li>
        <li className="text-gray-700">
          <strong className="font-semibold text-gray-900">Com outros usuários:</strong> quando Você compartilha
          informações pessoais ou interage de outra forma nas áreas públicas com
          outros usuários, tais informações podem ser visualizadas por todos os
          usuários e podem ser distribuídas publicamente fora delas. Se Você
          interage com outros usuários ou se registra através de um Serviço de
          Mídia Social de Terceiros, Seus contatos no Serviço de Mídia Social de
          Terceiros podem ver Seu nome, perfil, fotos e descrição de Sua
          atividade. Da mesma forma, outros usuários poderão visualizar
          descrições de Sua atividade, se comunicar com Você e visualizar Seu
          perfil.
        </li>
        <li className="text-gray-700">
          <strong className="font-semibold text-gray-900">Com Seu consentimento</strong>: Podemos divulgar Suas
          informações pessoais para qualquer outra finalidade com Seu
          consentimento.
        </li>
      </ul>
      <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">Retenção de Seus Dados Pessoais</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A Empresa reterá Seus Dados Pessoais apenas pelo tempo necessário para
        os fins estabelecidos nesta Política de Privacidade. Reteremos e
        usaremos Seus Dados Pessoais na medida necessária para cumprir nossas
        obrigações legais (por exemplo, se formos obrigados a reter Seus dados
        para cumprir as leis aplicáveis), resolver disputas e fazer cumprir
        nossos acordos e políticas legais.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A Empresa também reterá os Dados de Uso para fins de análise interna. Os
        Dados de Uso são geralmente retidos por um período mais curto, exceto
        quando esses dados são usados para fortalecer a segurança ou para
        melhorar a funcionalidade do Nosso Serviço, ou somos legalmente
        obrigados a reter esses dados por períodos mais longos.
      </p>
      <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">Transferência de Seus Dados Pessoais</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Suas informações, incluindo Dados Pessoais, são processadas nos
        escritórios de operação da Empresa e em quaisquer outros locais onde as
        partes envolvidas no processamento estejam localizadas. Isso significa
        que essas informações podem ser transferidas para — e mantidas em —
        computadores localizados fora de Seu estado, província, país ou outra
        jurisdição governamental onde as leis de proteção de dados podem diferir
        das de Sua jurisdição.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Seu consentimento para esta Política de Privacidade seguido de Sua
        submissão de tais informações representa Sua concordância com essa
        transferência.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        A Empresa tomará todas as medidas razoavelmente necessárias para
        garantir que Seus dados sejam tratados de forma segura e de acordo com
        esta Política de Privacidade e nenhuma transferência de Seus Dados
        Pessoais ocorrerá para uma organização ou país, a menos que existam
        controles adequados em vigor, incluindo a segurança de Seus dados e
        outras informações pessoais.
      </p>
      <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">Excluir Seus Dados Pessoais</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        Você tem o direito de excluir ou solicitar que Ajudemos a excluir os
        Dados Pessoais que Coletamos sobre Você.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Nosso Serviço pode dar a Você a capacidade de excluir certas informações
        sobre Você de dentro do Serviço.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Você pode atualizar, emendar ou excluir Suas informações a qualquer
        momento, fazendo login em Sua Conta, se tiver uma, e visitando a seção
        de configurações da conta que permite gerenciar Suas informações
        pessoais. Você também pode entrar em contato conosco para solicitar
        acesso, corrigir ou excluir qualquer informação pessoal que Você nos
        forneceu.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Observe, no entanto, que podemos precisar reter certas informações
        quando tivermos uma obrigação legal ou base legal para fazê-lo.
      </p>
      <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">Divulgação de Seus Dados Pessoais</h3>
      <h4 className="text-xl font-bold text-gray-800 mt-4 mb-2">Transações de Negócios</h4>
      <p className="text-gray-700 leading-relaxed mb-4">
        Se a Empresa estiver envolvida em uma fusão, aquisição ou venda de
        ativos, Seus Dados Pessoais podem ser transferidos. Forneceremos aviso
        antes que Seus Dados Pessoais sejam transferidos e se tornem sujeitos a
        uma Política de Privacidade diferente.
      </p>
      <h4 className="text-xl font-bold text-gray-800 mt-4 mb-2">Aplicação da lei</h4>
      <p className="text-gray-700 leading-relaxed mb-4">
        Sob certas circunstâncias, a Empresa pode ser obrigada a divulgar Seus
        Dados Pessoais se exigido por lei ou em resposta a solicitações válidas
        de autoridades públicas (por exemplo, um tribunal ou uma agência
        governamental).
      </p>
      <h4 className="text-xl font-bold text-gray-800 mt-4 mb-2">Outras exigências legais</h4>
      <p className="text-gray-700 leading-relaxed mb-4">
        A Empresa pode divulgar Seus Dados Pessoais na crença de boa-fé de que
        tal ação é necessária para:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li className="text-gray-700">Cumprir uma obrigação legal</li>
        <li className="text-gray-700">Proteger e defender os direitos ou propriedade da Empresa</li>
        <li className="text-gray-700">
          Prevenir ou investigar possíveis irregularidades em conexão com o
          Serviço
        </li>
        <li className="text-gray-700">
          Proteger a segurança pessoal dos Usuários do Serviço ou do público
        </li>
        <li className="text-gray-700">Proteger contra responsabilidade legal</li>
      </ul>
      <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-3">Segurança de Seus Dados Pessoais</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        A segurança de Seus Dados Pessoais é importante para Nós, mas lembre-se
        de que nenhum método de transmissão pela Internet, ou método de
        armazenamento eletrônico, é 100% seguro. Embora Nós nos esforcemos para
        usar meios comercialmente razoáveis para proteger Seus Dados Pessoais,
        não podemos garantir sua segurança absoluta.
      </p>
      <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">Privacidade de Crianças</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Nosso Serviço não se destina a ninguém com idade inferior a 13 anos. Não
        coletamos intencionalmente informações de identificação pessoal de
        ninguém com idade inferior a 13 anos. Se Você é um pai ou responsável e
        está ciente de que Seu filho nos forneceu Dados Pessoais, entre em
        contato conosco. Se tomarmos conhecimento de que coletamos Dados
        Pessoais de alguém com idade inferior a 13 anos sem a verificação do
        consentimento dos pais, tomaremos medidas para remover essa informação
        de Nossos servidores.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Se precisarmos confiar no consentimento como base legal para processar
        Suas informações e Seu país exigir o consentimento de um pai, podemos
        exigir o consentimento de Seu pai antes de Coletarmos e usarmos essas
        informações.
      </p>
      <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">Links para Outros Websites</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Nosso Serviço pode conter links para outros sites que não são operados
        por Nós. Se Você clicar em um link de terceiros, Você será direcionado
        para o site desse terceiro. Aconselhamos fortemente que Você revise a
        Política de Privacidade de todos os sites que Você visita.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Não temos controle sobre e não assumimos responsabilidade pelo conteúdo,
        políticas de privacidade ou práticas de quaisquer sites ou serviços de
        terceiros.
      </p>
      <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">Alterações nesta Política de Privacidade</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Podemos atualizar Nossa Política de Privacidade de tempos em tempos. Nós
        o notificaremos sobre quaisquer alterações postando a nova Política de
        Privacidade nesta página.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Nós o informaremos por e-mail e/ou um aviso proeminente em Nosso
        Serviço, antes que a alteração se torne efetiva e atualizaremos a data
        de "Última atualização" no topo desta Política de Privacidade.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Você é aconselhado a revisar esta Política de Privacidade periodicamente
        para quaisquer alterações. As alterações a esta Política de Privacidade
        são efetivas quando são publicadas nesta página.
      </p>
      <h2 className="text-3xl font-bold text-gray-800 mt-8 mb-4">Contate-Nos</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Se você tiver alguma dúvida sobre esta Política de Privacidade, Você
        pode nos contatar:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li className="text-gray-700">
          Por e-mail:{" "}
          <a
            href="/Pomodoro-online/cdn-cgi/l/email-protection"
            className="text-blue-500 hover:underline __cf_email__"
            data-cfemail="c8aba7a6bca9bca7e6bea1a6a1aba1a7bbbbbb88afa5a9a1a4e6aba7a5"
          >
            [email&#160;protected]
          </a>
        </li>
      </ul>
    </div>
    </div>
  );
}
// Données des études de cas du portfolio

window.CASE_STUDIES = {

  /* ============================================================
     01 — CONCEVOIR
     ============================================================ */
  concevoir: {

    index: "01",

    title: "Concevoir",

    subject: "Programmation et développement d'IHM pour des installations CVC",

    note: "Activités réalisées dans le cadre d'un projet hospitalier d'envergure",

    sections: [

      {
        label: "Contexte",
        text: "Dans le cadre de mon alternance chez EQUANS Digital, j'ai participé au développement de systèmes de régulation destinés à différentes installations CVC d'un important projet hospitalier."
      },

      {
        label: "Problématique",
        text: "Chaque installation possède ses propres équipements, paramètres et séquences de fonctionnement. Il est donc nécessaire d'adapter la programmation et les interfaces aux besoins techniques de chaque système."
      },

      {
        label: "Analyse du fonctionnement",
        text: "Avant de réaliser la programmation, j'étudie le fonctionnement attendu de l'installation, les équipements présents et les différentes informations nécessaires à sa régulation."
      },

      {
        label: "Programmation",
        text: "Développement et adaptation des programmes de régulation avec EC-gfxProgram afin d'assurer le fonctionnement des équipements conformément aux besoins de l'installation."
      },

      {
        label: "Conception des IHM",
        text: "Création et modification d'interfaces homme-machine avec EasyBuilder Pro afin de permettre la visualisation des états, des mesures, des consignes et des défauts de l'installation."
      },

      {
        label: "Adaptation aux installations",
        text: "Le développement est adapté aux différents systèmes rencontrés sur le projet, notamment les centrales de traitement d'air et les installations hydrauliques."
      },

      {
        label: "Résultat obtenu",
        text: "Des programmes et des interfaces adaptés aux installations, prêts à être chargés puis vérifiés lors des phases d'essais et de mise en service."
      },

      {
        label: "Compétences développées",
        text: "Analyse fonctionnelle, programmation d'automatismes, conception d'IHM, compréhension des systèmes CVC et autonomie dans le développement de solutions techniques."
      }

    ],

    gallery: [
      {
        src: "images/extrait_manuel_op.jpg",
        caption: "Extrait du manuel opérateur — IHM des blocs opératoires"
      }
    ],

    conclusion: "Cette activité m'a permis de mettre en pratique mes compétences en automatisme en partant du fonctionnement attendu d'une installation pour développer une solution de régulation et une interface adaptées."
  },


  /* ============================================================
     02 — VÉRIFIER
     ============================================================ */
  verifier: {

    index: "02",

    title: "Vérifier",

    subject: "Essais et validation du fonctionnement des installations",

    note: "Vérifications réalisées avant et pendant les mises en service",

    sections: [

      {
        label: "Contexte",
        text: "Après la programmation et le chargement des programmes, les installations doivent être testées afin de vérifier que les équipements et les fonctions de régulation réagissent correctement."
      },

      {
        label: "Objectif",
        text: "Vérifier que le comportement réel de l'installation correspond au fonctionnement attendu et identifier les éventuels écarts avant sa mise en service."
      },

      {
        label: "Contrôle des informations",
        text: "Vérification de la cohérence des informations remontées par les équipements : états, mesures, commandes et défauts."
      },

      {
        label: "Simulation des défauts",
        text: "Déclenchement volontaire de différents défauts afin de vérifier leur prise en compte par le programme et leur affichage correct sur l'IHM."
      },

      {
        label: "Essais de régulation",
        text: "Réalisation de tests sur le fonctionnement des installations afin de contrôler les réactions du système, les consignes et les différentes séquences programmées."
      },

      {
        label: "Analyse des écarts",
        text: "Lorsqu'un comportement ne correspond pas au résultat attendu, recherche de l'origine du problème puis modification ou correction du programme lorsque cela est nécessaire."
      },

      {
        label: "Validation",
        text: "Les différents essais permettent de confirmer progressivement le bon fonctionnement des équipements et des fonctions développées avant la mise en service."
      },

      {
        label: "Résultat obtenu",
        text: "Des installations testées et vérifiées sur le terrain, avec correction des anomalies rencontrées au cours des essais."
      }

    ],

    gallery: [
      {
        src: "images/mise_en_service_1.jpg",
        caption: "Mise en service — Simulation et validation des défauts"
      }
    ],

    conclusion: "Cette activité m'a appris à ne pas me limiter au développement du programme, mais à vérifier son comportement réel sur l'installation et à rechercher l'origine d'un dysfonctionnement lorsqu'un écart apparaît."
  },


  /* ============================================================
     03 — MAINTENIR
     ============================================================ */
  maintenir: {

    index: "03",

    title: "Maintenir",

    subject: "Diagnostic et correction des anomalies rencontrées sur les installations",

    note: "Interventions réalisées au cours des phases d'essais et de mise en service",

    sections: [

      {
        label: "Contexte",
        text: "Les phases d'essais et de mise en service permettent de faire apparaître des anomalies qui ne sont pas toujours identifiables lors de la programmation en amont."
      },

      {
        label: "Identification des anomalies",
        text: "Lorsqu'un équipement ou une séquence ne fonctionne pas comme prévu, j'analyse les informations disponibles afin d'identifier l'origine possible du problème."
      },

      {
        label: "Diagnostic",
        text: "Le diagnostic peut nécessiter de vérifier les états des équipements, les valeurs remontées, les conditions du programme ainsi que les informations affichées sur l'IHM."
      },

      {
        label: "Recherche de la cause",
        text: "La comparaison entre le comportement attendu et le comportement réel permet progressivement d'isoler la cause d'un défaut ou d'un fonctionnement incorrect."
      },

      {
        label: "Correction",
        text: "Lorsque le problème provient du programme ou du paramétrage, les corrections nécessaires sont réalisées puis le fonctionnement est de nouveau testé."
      },

      {
        label: "Aide au diagnostic par l'IHM",
        text: "La présence d'états et de défauts clairement identifiés sur les interfaces facilite la compréhension du fonctionnement de l'installation et la recherche d'anomalies."
      },

      {
        label: "Nouvelle vérification",
        text: "Après chaque modification, de nouveaux essais sont réalisés afin de vérifier que la correction apportée résout bien le problème sans perturber le reste du fonctionnement."
      },

      {
        label: "Résultat obtenu",
        text: "Cette démarche permet de fiabiliser progressivement l'installation et de faciliter l'identification des défauts rencontrés lors de son exploitation."
      }

    ],

    gallery: [
      {
        src: "images/mise_en_service_4.jpeg",
        caption: "Mise en service — Diagnostic et recherche d’anomalies"
      }
    ],

    conclusion: "Cette activité m'a permis de développer une démarche de diagnostic structurée : observer, identifier l'origine d'un problème, apporter une correction puis vérifier son efficacité."
  },


  /* ============================================================
     04 — INTÉGRER
     ============================================================ */
  integrer: {

    index: "04",

    title: "Intégrer",

    subject: "Participation aux mises en service sur site",

    note: "Interventions réalisées sur un projet hospitalier d'envergure",

    sections: [

      {
        label: "Présentation du projet",
        text: "Le projet sur lequel j'interviens comprend un grand nombre d'installations techniques CVC nécessitant une préparation, une programmation puis une mise en service directement sur site."
      },

      {
        label: "Mission",
        text: "Je participe aux différentes opérations permettant de passer d'un programme développé en amont à une installation réellement fonctionnelle sur le terrain."
      },

      {
        label: "Chargement des programmes",
        text: "Chargement des programmes dans les équipements de régulation présents sur l'installation afin de préparer le démarrage des essais."
      },

      {
        label: "Vérifications sur site",
        text: "Contrôle des informations remontées par les différents équipements et vérification de la cohérence entre le programme, l'IHM et le comportement réel de l'installation."
      },

      {
        label: "Essais fonctionnels",
        text: "Réalisation d'essais sur les équipements et les différentes séquences de fonctionnement afin de vérifier progressivement l'ensemble de l'installation."
      },

      {
        label: "Tests des défauts",
        text: "Simulation de défauts sur le terrain afin de contrôler leur détection par le système et leur affichage correct sur l'interface."
      },

      {
        label: "Corrections",
        text: "Les problèmes rencontrés pendant les essais sont analysés puis corrigés lorsque cela concerne la programmation ou le paramétrage."
      },

      {
        label: "Travail sur le terrain",
        text: "La mise en service nécessite des échanges réguliers avec les différents intervenants du chantier afin de comprendre les situations rencontrées et de faire avancer les essais."
      },

      {
        label: "Résultat obtenu",
        text: "Les différentes phases de mise en service permettent de rendre progressivement les installations opérationnelles et de valider leur fonctionnement réel."
      }

    ],

    gallery: [
      {
        src: "images/mise_en_service_5.jpeg",
        caption: "Mise en service — Chargement des programmes IHM des armoires"
      }
    ],

    conclusion: "Les mises en service m'ont permis de confronter directement mon travail de programmation au fonctionnement réel des installations et de mieux comprendre l'ensemble des étapes nécessaires à l'intégration d'un système automatisé."
  }

};
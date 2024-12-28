import type { Schema, Struct } from '@strapi/strapi';

export interface BannerDistributorsStockistsBanner
  extends Struct.ComponentSchema {
  collectionName: 'components_banner_distributors_stockists_banners';
  info: {
    displayName: 'Distributors Stockists Banner';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    sub_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BannerLandingPageVideoSlider extends Struct.ComponentSchema {
  collectionName: 'components_banner_landing_page_video_sliders';
  info: {
    displayName: 'Landing_Page_Video_Slider';
  };
  attributes: {
    sub_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CardsCertificationsAndMemberships
  extends Struct.ComponentSchema {
  collectionName: 'components_cards_certifications_and_memberships';
  info: {
    displayName: 'Certifications & Memberships';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface CardsContentCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_content_cards';
  info: {
    description: '';
    displayName: 'Content Card';
  };
  attributes: {
    Content: Schema.Attribute.Blocks;
    Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CardsDistributorsAndStockistsCard
  extends Struct.ComponentSchema {
  collectionName: 'components_cards_distributors_and_stockists_cards';
  info: {
    displayName: 'Distributors & Stockists Card';
  };
  attributes: {
    Icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    info: Schema.Attribute.Text;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CardsExpertiseCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_expertise_cards';
  info: {
    displayName: 'Expertise Card';
  };
  attributes: {
    content: Schema.Attribute.Text;
    link: Schema.Attribute.String;
  };
}

export interface CardsHistoyCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_histoy_cards';
  info: {
    displayName: 'Histoy Card';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Info: Schema.Attribute.String;
    Year: Schema.Attribute.String;
  };
}

export interface CardsList extends Struct.ComponentSchema {
  collectionName: 'components_cards_lists';
  info: {
    displayName: 'list';
    icon: 'bulletList';
  };
  attributes: {
    list: Schema.Attribute.String;
  };
}

export interface CardsListCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_list_cards';
  info: {
    description: '';
    displayName: 'list card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    info: Schema.Attribute.Text;
    link: Schema.Attribute.String;
    lists: Schema.Attribute.Component<'cards.list', true>;
    title: Schema.Attribute.String;
  };
}

export interface CardsMarineRopesCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_marine_ropes_cards';
  info: {
    description: '';
    displayName: 'Marine Ropes Card';
  };
  attributes: {
    Images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    info: Schema.Attribute.Text;
    list: Schema.Attribute.Component<'cards.why-choose-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface CardsMilestoneCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_milestone_cards';
  info: {
    displayName: 'Milestone Card';
  };
  attributes: {
    Icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CardsPortCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_port_cards';
  info: {
    displayName: 'Port Card';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Name: Schema.Attribute.String;
  };
}

export interface CardsProvisionsCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_provisions_cards';
  info: {
    description: '';
    displayName: 'Provisions Card';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    info: Schema.Attribute.Text;
    List: Schema.Attribute.Component<'cards.title-list', true>;
    title: Schema.Attribute.String;
  };
}

export interface CardsServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_service_cards';
  info: {
    description: '';
    displayName: 'Service_card';
  };
  attributes: {
    Excerpt: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CardsTitleContnet extends Struct.ComponentSchema {
  collectionName: 'components_cards_title_contnets';
  info: {
    displayName: 'Title Contnet';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface CardsTitleList extends Struct.ComponentSchema {
  collectionName: 'components_cards_title_lists';
  info: {
    description: '';
    displayName: 'Title List';
  };
  attributes: {
    lists: Schema.Attribute.Component<'cards.list', true>;
    title: Schema.Attribute.String;
  };
}

export interface CardsWhyChooseCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_why_choose_cards';
  info: {
    description: '';
    displayName: 'why choose card';
  };
  attributes: {
    info: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface FooterAdamallysGroup2 extends Struct.ComponentSchema {
  collectionName: 'components_footer_adamallys_group_2s';
  info: {
    displayName: 'Adamallys Group 2';
  };
  attributes: {
    address: Schema.Attribute.String;
    Email: Schema.Attribute.String;
    Fax: Schema.Attribute.String;
    Telephone: Schema.Attribute.String;
  };
}

export interface FooterAdamallysLlc extends Struct.ComponentSchema {
  collectionName: 'components_footer_adamallys_llcs';
  info: {
    displayName: 'Adamallys LLC';
  };
  attributes: {
    Email: Schema.Attribute.String;
    Fax: Schema.Attribute.String;
    Location: Schema.Attribute.String;
    Telephone: Schema.Attribute.String;
  };
}

export interface FooterAdamallysMarineShipChandlingServices
  extends Struct.ComponentSchema {
  collectionName: 'components_footer_adamallys_marine_ship_chandling_services';
  info: {
    displayName: 'Adamallys Marine Ship chandling services';
  };
  attributes: {
    Email: Schema.Attribute.String;
    Fax: Schema.Attribute.String;
    Location: Schema.Attribute.String;
    Telephone: Schema.Attribute.String;
  };
}

export interface NavigationIcon extends Struct.ComponentSchema {
  collectionName: 'components_navigation_icons';
  info: {
    displayName: 'Icon';
  };
  attributes: {
    Icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface NavigationIconLink extends Struct.ComponentSchema {
  collectionName: 'components_navigation_icon_links';
  info: {
    displayName: 'Icon Link';
  };
  attributes: {
    Icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
  };
}

export interface NavigationLinks extends Struct.ComponentSchema {
  collectionName: 'components_navigation_links';
  info: {
    displayName: 'Links';
    icon: 'attachment';
  };
  attributes: {
    Label: Schema.Attribute.String;
    Link: Schema.Attribute.String;
  };
}

export interface NavigationRequestAQouteButton extends Struct.ComponentSchema {
  collectionName: 'components_navigation_request_a_qoute_buttons';
  info: {
    displayName: 'Request a qoute button';
  };
  attributes: {
    Email: Schema.Attribute.String;
    Link: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'banner.distributors-stockists-banner': BannerDistributorsStockistsBanner;
      'banner.landing-page-video-slider': BannerLandingPageVideoSlider;
      'cards.certifications-and-memberships': CardsCertificationsAndMemberships;
      'cards.content-card': CardsContentCard;
      'cards.distributors-and-stockists-card': CardsDistributorsAndStockistsCard;
      'cards.expertise-card': CardsExpertiseCard;
      'cards.histoy-card': CardsHistoyCard;
      'cards.list': CardsList;
      'cards.list-card': CardsListCard;
      'cards.marine-ropes-card': CardsMarineRopesCard;
      'cards.milestone-card': CardsMilestoneCard;
      'cards.port-card': CardsPortCard;
      'cards.provisions-card': CardsProvisionsCard;
      'cards.service-card': CardsServiceCard;
      'cards.title-contnet': CardsTitleContnet;
      'cards.title-list': CardsTitleList;
      'cards.why-choose-card': CardsWhyChooseCard;
      'footer.adamallys-group-2': FooterAdamallysGroup2;
      'footer.adamallys-llc': FooterAdamallysLlc;
      'footer.adamallys-marine-ship-chandling-services': FooterAdamallysMarineShipChandlingServices;
      'navigation.icon': NavigationIcon;
      'navigation.icon-link': NavigationIconLink;
      'navigation.links': NavigationLinks;
      'navigation.request-a-qoute-button': NavigationRequestAQouteButton;
    }
  }
}

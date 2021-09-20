import React from 'react';
import S from '@sanity/desk-tool/structure-builder';
import { MdSettings, MdBusiness } from 'react-icons/md';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { AiOutlineGlobal } from 'react-icons/ai';
import QueryContainer from 'part:@sanity/base/query-container';

const SectionColorPreview = ({ document }) => {
  // The JSON preview
  const documentQuery = `*[_type == 'sectionColorSet' && name == '${document.displayed.name}'] | order(_updatedAt desc) {
    background->, foreground->, link->, heading->, subtitle->, footer->
  }`;
  return (
    <QueryContainer query={documentQuery}>
      {({ result, loading }) => {
        const bgColor = result?.documents[0]?.background?.color?.hex
          ? result?.documents[0]?.background?.color?.hex
          : 'transparent';
        const bgColorAlpha =
          result?.documents[0]?.background?.color?.hex &&
          result?.documents[0]?.background?.color?.alpha < 1
            ? bgColor + result.documents[0].background.color.alpha * 100
            : bgColor;

        const color = result?.documents[0]?.foreground?.color?.hex
          ? result?.documents[0]?.foreground?.color?.hex
          : 'intial';
        const colorAlpha =
          result?.documents[0]?.foreground?.color?.hex &&
          result?.documents[0]?.foreground?.color?.alpha < 1
            ? color + result.documents[0].foreground.color.alpha * 100
            : color;

        const link = result?.documents[0]?.link?.color?.hex
          ? result?.documents[0]?.link?.color?.hex
          : 'intial';
        const linkAlpha =
          result?.documents[0]?.link?.color?.hex && result?.documents[0]?.link?.color?.alpha < 1
            ? link + result.documents[0].link.color.alpha * 100
            : link;

        const heading = result?.documents[0]?.heading?.color?.hex
          ? result?.documents[0]?.heading?.color?.hex
          : 'inherit';
        const headingAlpha =
          result?.documents[0]?.heading?.color?.hex &&
          result?.documents[0]?.heading?.color?.alpha < 1
            ? heading + result.documents[0].heading.color.alpha * 100
            : heading;

        const subtitle = result?.documents[0]?.subtitle?.color?.hex
          ? result?.documents[0]?.subtitle?.color?.hex
          : 'inherit';
        const subtitleAlpha =
          result?.documents[0]?.subtitle?.color?.hex &&
          result?.documents[0]?.subtitle?.color?.alpha < 1
            ? subtitle + result.documents[0].subtitle.color.alpha * 100
            : subtitle;

        const footer = result?.documents[0]?.footer?.color?.hex
          ? result?.documents[0]?.footer?.color?.hex
          : 'inherit';
        const footerAlpha =
          result?.documents[0]?.footer?.color?.hex && result?.documents[0]?.footer?.color?.alpha < 1
            ? footer + result.documents[0].footer.color.alpha * 100
            : footer;

        return loading ? (
          <div> data loading </div>
        ) : (
          result && (
            <div
              style={{
                width: '100%',
              }}
            >
              <div
                style={{
                  margin: '16px',
                  padding: '32px',
                  backgroundColor: bgColorAlpha,
                  color: colorAlpha,
                }}
              >
                <h2 style={{ color: headingAlpha }}>This is a section heading</h2>
                <h3 style={{ color: subtitleAlpha }}>This is a section subtitle</h3>
                <br />
                <p>
                  This is section content. This is a{' '}
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a style={{ color: linkAlpha }} href="#">
                    link
                  </a>{' '}
                  in section content.
                </p>
                <br />
                <p style={{ color: footerAlpha }}>This is a section footer.</p>
              </div>
            </div>
          )
        );
      }}
    </QueryContainer>
  );
};

export default () =>
  S.list()
    .title('Reverse Proxy Website')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(MdSettings)
        .child(
          S.list()
            .title('Site Settings')
            .items([
              S.listItem()
                .title('General Settings')
                .icon(MdSettings)
                .child(S.document().schemaType('generalSettings').documentId('generalSettings')),
              S.listItem()
                .title('Palette')
                .icon(MdSettings)
                .child(S.document().schemaType('palette').documentId('palette')),
              S.listItem()
                .title('Typography')
                .icon(MdSettings)
                .child(S.document().schemaType('typography').documentId('typography')),
              S.listItem()
                .title('Section Color Sets')
                .schemaType('sectionColorSet')
                .child(
                  S.documentTypeList('sectionColorSet')
                    .title('Section Color Sets')
                    .child((documentId) =>
                      S.document()
                        .documentId(documentId)
                        .schemaType('sectionColorSet')
                        .views([
                          S.view.form(),
                          S.view.component(SectionColorPreview).title('Preview'),
                        ]),
                    ),
                ),
              S.documentTypeListItem('btnDesignMui').title('Button Design Options - MUI'),
            ]),
        ),

      S.listItem()
        .title('Company Info')
        .icon(HiOutlineOfficeBuilding)
        .child(
          S.list()
            .title('Company Info')
            .items([
              S.listItem()
                .title('Contact Info')
                .icon(MdBusiness)
                .child(S.document().schemaType('companyInfo').documentId('companyInfo')),
              S.documentTypeListItem('socialInfo').title('Social Info'),
              S.documentTypeListItem('companyLogo').title('Company Logos'),
            ]),
        ),
      S.listItem()
        .title('Website')
        .icon(AiOutlineGlobal)
        .child(
          S.list()
            .title('Website')
            .items([
              S.documentTypeListItem('navMenu').title('Navigation Menus'),
              S.divider(),
              S.documentTypeListItem('page').title('Structured Pages'),
              S.documentTypeListItem('listingPage').title('Listing Pages'),
              S.documentTypeListItem('spGuide').title('SP Guides'),
              S.divider(),
              S.documentTypeListItem('redirect').title('Redirects'),
            ]),
        ),
      S.divider(),
      S.documentTypeListItem('colorOption').title('Color Options'),
      S.documentTypeListItem('formNetlify').title('Form Netlify'),
      S.documentTypeListItem('testImage').title('Test Images'),
    ]);

--
-- PostgreSQL database dump
--

\restrict o79UcIFdGs3aejmfRbG01ccJYzXmLws4LFedyPDvfETrSlb7gTDgDoarfgu77dW

-- Dumped from database version 18.4
-- Dumped by pg_dump version 18.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Contact; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Contact" (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    phone text,
    subject text,
    message text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Contact" OWNER TO postgres;

--
-- Name: Contact_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Contact_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Contact_id_seq" OWNER TO postgres;

--
-- Name: Contact_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Contact_id_seq" OWNED BY public."Contact".id;


--
-- Name: Event; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Event" (
    id integer NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    location text NOT NULL,
    "eventDate" timestamp(3) without time zone NOT NULL,
    "bannerImage" text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    featured boolean DEFAULT false NOT NULL,
    "bookingLink" text,
    "sponsorLogo" text,
    "sponsorName" text
);


ALTER TABLE public."Event" OWNER TO postgres;

--
-- Name: Event_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Event_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Event_id_seq" OWNER TO postgres;

--
-- Name: Event_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Event_id_seq" OWNED BY public."Event".id;


--
-- Name: Gallery; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Gallery" (
    id integer NOT NULL,
    title text,
    category text,
    image text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Gallery" OWNER TO postgres;

--
-- Name: Gallery_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Gallery_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Gallery_id_seq" OWNER TO postgres;

--
-- Name: Gallery_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Gallery_id_seq" OWNED BY public."Gallery".id;


--
-- Name: HeroSlide; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."HeroSlide" (
    id integer NOT NULL,
    title text NOT NULL,
    subtitle text,
    "buttonText" text,
    "buttonLink" text,
    image text,
    "order" integer DEFAULT 1 NOT NULL,
    "isActive" boolean DEFAULT true NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    "eventId" integer,
    "productId" integer,
    "slideType" text DEFAULT 'custom'::text NOT NULL
);


ALTER TABLE public."HeroSlide" OWNER TO postgres;

--
-- Name: HeroSlide_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."HeroSlide_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."HeroSlide_id_seq" OWNER TO postgres;

--
-- Name: HeroSlide_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."HeroSlide_id_seq" OWNED BY public."HeroSlide".id;


--
-- Name: HomeContent; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."HomeContent" (
    id integer DEFAULT 1 NOT NULL,
    "aboutTitle" text,
    "aboutContent" text,
    "ctaTitle" text,
    "ctaSubtitle" text,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."HomeContent" OWNER TO postgres;

--
-- Name: Inquiry; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Inquiry" (
    id integer NOT NULL,
    name text NOT NULL,
    phone text NOT NULL,
    email text,
    message text NOT NULL,
    "productId" integer,
    "eventId" integer,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Inquiry" OWNER TO postgres;

--
-- Name: Inquiry_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Inquiry_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Inquiry_id_seq" OWNER TO postgres;

--
-- Name: Inquiry_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Inquiry_id_seq" OWNED BY public."Inquiry".id;


--
-- Name: Product; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Product" (
    id integer NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    price double precision NOT NULL,
    image text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    featured boolean DEFAULT false NOT NULL,
    category text,
    "discountPercent" integer DEFAULT 0
);


ALTER TABLE public."Product" OWNER TO postgres;

--
-- Name: Product_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Product_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Product_id_seq" OWNER TO postgres;

--
-- Name: Product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Product_id_seq" OWNED BY public."Product".id;


--
-- Name: Setting; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Setting" (
    id integer DEFAULT 1 NOT NULL,
    "siteName" text,
    "companyName" text,
    phone text,
    email text,
    address text,
    facebook text,
    instagram text,
    youtube text,
    logo text,
    favicon text,
    "updatedAt" timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Setting" OWNER TO postgres;

--
-- Name: Testimonial; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Testimonial" (
    id integer NOT NULL,
    name text NOT NULL,
    company text,
    review text NOT NULL,
    rating integer DEFAULT 5 NOT NULL,
    image text,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Testimonial" OWNER TO postgres;

--
-- Name: Testimonial_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Testimonial_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Testimonial_id_seq" OWNER TO postgres;

--
-- Name: Testimonial_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Testimonial_id_seq" OWNED BY public."Testimonial".id;


--
-- Name: User; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."User" (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    role text DEFAULT 'admin'::text NOT NULL,
    "createdAt" timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."User" OWNER TO postgres;

--
-- Name: User_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."User_id_seq" OWNER TO postgres;

--
-- Name: User_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: Contact id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Contact" ALTER COLUMN id SET DEFAULT nextval('public."Contact_id_seq"'::regclass);


--
-- Name: Event id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Event" ALTER COLUMN id SET DEFAULT nextval('public."Event_id_seq"'::regclass);


--
-- Name: Gallery id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Gallery" ALTER COLUMN id SET DEFAULT nextval('public."Gallery_id_seq"'::regclass);


--
-- Name: HeroSlide id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."HeroSlide" ALTER COLUMN id SET DEFAULT nextval('public."HeroSlide_id_seq"'::regclass);


--
-- Name: Inquiry id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Inquiry" ALTER COLUMN id SET DEFAULT nextval('public."Inquiry_id_seq"'::regclass);


--
-- Name: Product id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Product" ALTER COLUMN id SET DEFAULT nextval('public."Product_id_seq"'::regclass);


--
-- Name: Testimonial id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Testimonial" ALTER COLUMN id SET DEFAULT nextval('public."Testimonial_id_seq"'::regclass);


--
-- Name: User id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);


--
-- Data for Name: Contact; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Contact" (id, name, email, phone, subject, message, "createdAt") FROM stdin;
\.


--
-- Data for Name: Event; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Event" (id, title, description, location, "eventDate", "bannerImage", "createdAt", featured, "bookingLink", "sponsorLogo", "sponsorName") FROM stdin;
4	Experience Unforgettable Entertainment Events	Join the biggest concerts, DJ nights, festivals, and live entertainment experiences	Germany	2026-06-18 00:00:00	/uploads/events/1780472046877.jpg	2026-06-03 07:34:06.893	f	\N	\N	\N
5	Creating Memorable Public Experiences	From music festivals to community celebrations, we bring entertainment and excitement to every event.	Germany	2026-06-19 00:00:00	/uploads/events/1780472165050.jpg	2026-06-03 07:36:05.081	f	https://in.bookmyshow.com/movies/bengaluru/peddi/ET00439772		
7	Premium Event Equipment & Production	Professional sound systems, lighting, stages, LED walls, and event production services for events of any size.	Germany	2026-06-10 00:00:00	/uploads/events/1780472335925.jpg	2026-06-03 07:38:55.958	f	https://www.google.com/search?client=ms-android-samsung-ss&hs=Ndf&sca_esv=70aa846ced6b4820&hl=en-IN&cs=1&sxsrf=ANbL-n5G7gfrhaUzg2nOnYQm779ZJTIvTA%3A1780417930003&kgmid=%2Fg%2F11b6d2vclb&q=Spicelands&shem=rimspwouoe&shndl=30&source=sh%2Fx%2Floc%2Fact%2Fm1%2F4&kgs=5c86ea5abfc9da37&sei=auEfaqPlC5_dseMPstfb8Ac		ABINATH m
6	Experience Unforgettable Entertainment Events	Join the biggest concerts, DJ nights, festivals, and live entertainment experiences.	Germany 	2026-06-19 00:00:00	/uploads/events/1780472282524.jpg	2026-06-03 07:38:02.555	t	https://in.bookmyshow.com/movies/bengaluru/peddi/ET00439772		
8	Frankfurt Indian & Jaffna Street Festival	Open air \n@\nHauptwache Rossmarkt \n\nFrankfurt Indian & Jaffna Street Festival 	Frankfurt	2026-06-26 00:00:00	/uploads/events/1781278418000.jpeg	2026-06-12 15:33:38.049	t	https://zineflix.com/events		
\.


--
-- Data for Name: Gallery; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Gallery" (id, title, category, image, "createdAt") FROM stdin;
8			/uploads/gallery/1780472640574.jpg	2026-06-03 07:44:00.6
9			/uploads/gallery/1780472864874.jpg	2026-06-03 07:47:44.944
11			/uploads/gallery/1780472916874.jpg	2026-06-03 07:48:36.892
12			/uploads/gallery/1780472950998.jpg	2026-06-03 07:49:11.022
\.


--
-- Data for Name: HeroSlide; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."HeroSlide" (id, title, subtitle, "buttonText", "buttonLink", image, "order", "isActive", "createdAt", "eventId", "productId", "slideType") FROM stdin;
11	Experience Unforgettable Entertainment Events	Join the biggest concerts, DJ nights, festivals, and live entertainment experiences.	View Event	/events/6	/uploads/events/1780472282524.jpg	1	t	2026-06-11 17:04:54.698	6	\N	event
15	MULTI MILLET CHAPATHI MIX	MULTI MILLET CHAPATHI MIX			/uploads/hero/1781272418873.png	1	t	2026-06-12 13:53:38.953	\N	\N	custom
14	Thinai Mixture	Thinai Mixture	View Product	/products/62	/uploads/products/1781271302320.jpeg	3	t	2026-06-12 13:48:33.407	\N	62	product
16	Frankfurt Indian & Jaffna Street Festival	Open air \n@\nHauptwache Rossmarkt \n\nFrankfurt Indian & Jaffna Street Festival 	View Event	/events/8	/uploads/events/1781278418000.jpeg	4	t	2026-06-12 15:35:15.089	8	\N	event
\.


--
-- Data for Name: HomeContent; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."HomeContent" (id, "aboutTitle", "aboutContent", "ctaTitle", "ctaSubtitle", "updatedAt") FROM stdin;
\.


--
-- Data for Name: Inquiry; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Inquiry" (id, name, phone, email, message, "productId", "eventId", "createdAt") FROM stdin;
\.


--
-- Data for Name: Product; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Product" (id, title, description, price, image, "createdAt", featured, category, "discountPercent") FROM stdin;
48	Varagu Muruku	Varagu Muruku	111	/uploads/products/1781271514069.jpeg	2026-06-11 05:59:28.024	f	Snacks	0
47	Ragi Ribbon Muruku	Ragi Ribbon Muruku	1111	/uploads/products/1781271526619.jpeg	2026-06-11 05:56:06.256	t	Snacks	0
46	Karuppu Kavuni Rice - 500 g	Karuppu Kavuni Rice - 500 g	123	/uploads/products/1781271538180.jpeg	2026-06-10 18:47:13.988	f	Rice	0
62	Thinai Mixture	Thinai Mixture	111	/uploads/products/1781271302320.jpeg	2026-06-11 07:24:49.494	t	Millet Mix & Soups	11
61	Millet Poha	Millet Poha	111	/uploads/products/1781271314143.jpeg	2026-06-11 07:23:59.41	t	Millet Mix & Soups	0
60	Moringa Millet Adai - Dosai Mix	Moringa Millet Adai - Dosai Mix	1111	/uploads/products/1781271323929.jpeg	2026-06-11 07:22:58.372	f	Millet Mix & Soups	0
59	Soup - Plantain Stem - 50 Grms	Soup - Plantain Stem - 50 Grms	111	/uploads/products/1781271339165.jpeg	2026-06-11 07:20:52.586	t	Millet Mix & Soups	0
58	Multi Millet Moringa Dosa Mix - 300 Grms	Multi Millet Moringa Dosa Mix - 300 Grms	111	/uploads/products/1781271384668.jpeg	2026-06-11 07:20:09.124	f	Millet Mix & Soups	0
57	Multi Millet Curry Leaves Dosa Mix - 300 Grms	Multi Millet Curry Leaves Dosa Mix - 300 Grms	111	/uploads/products/1781271394446.jpeg	2026-06-11 07:19:21.402	f	Millet Mix & Soups	0
56	Multi Millet Moringa Leaves Chapati Mix - 2kg	Multi Millet Moringa Leaves Chapati Mix - 2kg	111	/uploads/products/1781271409919.jpeg	2026-06-11 07:17:45.649	f	Millet Mix & Soups	0
55	Multi Millet Moringa Leaves Chapati Mix - 500 Grams	Multi Millet Moringa Leaves Chapati Mix - 500 Grams	1111	/uploads/products/1781271419632.jpeg	2026-06-11 07:17:05.338	f	Millet Mix & Soups	0
54	Multi Millet Fenugreek Leaves Chapati Mix - 2kg	Multi Millet Fenugreek Leaves Chapati Mix - 2kg	111	/uploads/products/1781271431513.jpeg	2026-06-11 07:16:19.55	f	Millet Mix & Soups	0
53	Multi Millet Fenugreek Leaves Chapati Mix - 500 Grms	Multi Millet Fenugreek Leaves Chapati Mix - 500 Grms	111	/uploads/products/1781271442850.jpeg	2026-06-11 07:15:47.137	f	Millet Mix & Soups	0
52	Multi Millet Pasta - 200 Grams	Multi Millet Pasta - 200 Grams	111	/uploads/products/1781271458339.jpeg	2026-06-11 07:13:49.757	t	Frozen Items	0
51	Multi Millet Moringa Noodles - 200 Grms	Multi Millet Moringa Noodles - 200 Grms	1111	/uploads/products/1781271471382.jpeg	2026-06-11 07:12:49.926	t	Frozen Items	0
50	Thinai Kara Sev	Thinai Kara Sev	111	/uploads/products/1781271484891.jpeg	2026-06-11 06:03:07.177	t	Pulses	0
49	Thinai Pepper Sev	Thinai Pepper Sev	1111	/uploads/products/1781271499227.jpeg	2026-06-11 06:00:19.865	t	Snacks	0
45	Karuppu Kavuni Rice - 1 kg	Karuppu Kavuni Rice - 1 kg	111	/uploads/products/1781271580374.jpeg	2026-06-10 18:37:17.906	t	Rice	0
44	Sesame Oil (1 L)	Sesame Oil (1 L)	111	/uploads/products/1781271597712.jpeg	2026-06-10 18:35:35.066	t	Oil	0
43	Pattani Paruppu (Parupu Vadai) - 500 g	Pattani Paruppu (Parupu Vadai) - 500 g	111	/uploads/products/1781271621341.jpeg	2026-06-10 18:33:38.855	f	Pulses	0
42	Pattani Paruppu (Parupu Vadai) - 1 kg	Pattani Paruppu (Parupu Vadai) - 1 kg	111	/uploads/products/1781271634367.jpeg	2026-06-10 18:32:18.389	f	Pulses	0
41	Moringa Powder (50 g)	Moringa Powder (50 g)	222	/uploads/products/1781271657471.jpeg	2026-06-10 18:31:01.065	f	Organics	0
40	Honey Flavoured Muesli with Millets - 200 Grms	Honey Flavoured Muesli with Millets - 200 Grms	111	/uploads/products/1781271674677.jpeg	2026-06-10 18:30:20.078	t	Organics	0
39	Organic Jaggery - 500 Grms	Organic Jaggery - 500 Grms	200	/uploads/products/1781271688895.jpeg	2026-06-10 18:28:49.531	t	Organics	0
38	HB Chukku Malli Coffee - 100 Grms	HB Chukku Malli Coffee - 100 Grms	100	/uploads/products/1781271706049.jpeg	2026-06-10 18:23:14.799	t	Organics	0
\.


--
-- Data for Name: Setting; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Setting" (id, "siteName", "companyName", phone, email, address, facebook, instagram, youtube, logo, favicon, "updatedAt") FROM stdin;
\.


--
-- Data for Name: Testimonial; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Testimonial" (id, name, company, review, rating, image, "createdAt") FROM stdin;
1	cvxx	xcxcx	xcxxcxxc	5		2026-05-31 15:01:30.611
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."User" (id, name, email, password, role, "createdAt") FROM stdin;
1	Admin	admin@a4events.com	$2b$10$TNSvC66JgLUGPKns2Fpm8OHrnkqsiWZpYugTkaWKbIPsZOJWpOy.K	admin	2026-05-30 06:13:25.121
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
29e28a24-78c7-4825-914f-5dc7fa786e6f	c7e7077ef5c212d44daffd79eeec2723e68e41c680a0ae6887aba17b3c8b656a	2026-05-30 11:19:23.272921+05:30	20260530054923_init	\N	\N	2026-05-30 11:19:23.183387+05:30	1
a9bb23ba-4b07-4e01-a719-c23789490801	0c3c3e0f838345d811467ef6d692107c35baf11d12575c114bace3d79b26c730	2026-05-31 13:12:08.57107+05:30	20260531074208_add_inquiry	\N	\N	2026-05-31 13:12:08.194551+05:30	1
877c75a6-df90-42fe-95ea-39aca4d1da91	a44fd45bc76899ee9ae3594fd2693f0e585d73834f2c38b5e1c7c4daebf2ae3c	2026-05-31 14:24:12.688163+05:30	20260531085412_add_contact	\N	\N	2026-05-31 14:24:12.594789+05:30	1
18fe3d03-ebe0-4ba8-82d1-1292a52b5f1e	19d5f2ebc2e62c8126e45c1c440765c2015531bdbfd018f1982dbda4bffd6604	2026-05-31 19:23:24.834143+05:30	20260531135324_homepage_cms	\N	\N	2026-05-31 19:23:24.640888+05:30	1
e3b513bb-d173-4c11-b7c1-6e8021658a9c	78fbf458244f77dc07b2ddc37b946d4ffa1a2b45a1ca5fae116c4c9df86e4697	2026-06-03 13:59:29.305823+05:30	20260603082929_add_event_cta	\N	\N	2026-06-03 13:59:29.225275+05:30	1
e29afd56-a455-4d6d-a913-6f446997df09	5a44a91df4dd1c8022c51530e58839ce49a1d2cd7b79e9e5219bf9c9fdb2427f	2026-06-03 14:04:25.246364+05:30	20260603083425_add_event_cta	\N	\N	2026-06-03 14:04:25.203119+05:30	1
47f902c8-a338-4d6f-b0e4-69e78b8cf791	34e3e3edd9a687e611a95605f9e21b9643bf5145346e18485652deb19f89040c	2026-06-10 15:15:50.389211+05:30	20260610094550_add_category_discount	\N	\N	2026-06-10 15:15:50.283555+05:30	1
57aa9059-0b81-4de0-9e15-402cea1a664b	9daee90f1b9237a2d3e615e47faafd3f6414c743d0432ca9e0ec45e7e14afe45	2026-06-11 14:54:50.341615+05:30	20260611092450_add_slide_type_support	\N	\N	2026-06-11 14:54:50.259586+05:30	1
3219ef76-240c-4a62-8293-9d13c28c7d34	6ab8842cdcc8f6e713216f011772d9fc0bda866b2ec0caa6970c37d00e0d8bcf	2026-06-11 22:28:35.73995+05:30	20260611165835_hero_slide_relations	\N	\N	2026-06-11 22:28:35.716592+05:30	1
35913e65-c670-4da0-9bae-166d2abd9070	b6e9b123d03fac66326957720d9643affea7aaf833b0f6597f02c2e06b94e273	2026-06-11 23:11:09.588078+05:30	20260611174109_rename_discount	\N	\N	2026-06-11 23:11:09.580437+05:30	1
\.


--
-- Name: Contact_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Contact_id_seq"', 1, false);


--
-- Name: Event_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Event_id_seq"', 8, true);


--
-- Name: Gallery_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Gallery_id_seq"', 12, true);


--
-- Name: HeroSlide_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."HeroSlide_id_seq"', 16, true);


--
-- Name: Inquiry_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Inquiry_id_seq"', 1, false);


--
-- Name: Product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Product_id_seq"', 62, true);


--
-- Name: Testimonial_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Testimonial_id_seq"', 1, true);


--
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."User_id_seq"', 1, true);


--
-- Name: Contact Contact_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Contact"
    ADD CONSTRAINT "Contact_pkey" PRIMARY KEY (id);


--
-- Name: Event Event_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Event"
    ADD CONSTRAINT "Event_pkey" PRIMARY KEY (id);


--
-- Name: Gallery Gallery_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Gallery"
    ADD CONSTRAINT "Gallery_pkey" PRIMARY KEY (id);


--
-- Name: HeroSlide HeroSlide_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."HeroSlide"
    ADD CONSTRAINT "HeroSlide_pkey" PRIMARY KEY (id);


--
-- Name: HomeContent HomeContent_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."HomeContent"
    ADD CONSTRAINT "HomeContent_pkey" PRIMARY KEY (id);


--
-- Name: Inquiry Inquiry_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Inquiry"
    ADD CONSTRAINT "Inquiry_pkey" PRIMARY KEY (id);


--
-- Name: Product Product_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_pkey" PRIMARY KEY (id);


--
-- Name: Setting Setting_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Setting"
    ADD CONSTRAINT "Setting_pkey" PRIMARY KEY (id);


--
-- Name: Testimonial Testimonial_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Testimonial"
    ADD CONSTRAINT "Testimonial_pkey" PRIMARY KEY (id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: User_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


--
-- Name: HeroSlide HeroSlide_eventId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."HeroSlide"
    ADD CONSTRAINT "HeroSlide_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES public."Event"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: HeroSlide HeroSlide_productId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."HeroSlide"
    ADD CONSTRAINT "HeroSlide_productId_fkey" FOREIGN KEY ("productId") REFERENCES public."Product"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

\unrestrict o79UcIFdGs3aejmfRbG01ccJYzXmLws4LFedyPDvfETrSlb7gTDgDoarfgu77dW


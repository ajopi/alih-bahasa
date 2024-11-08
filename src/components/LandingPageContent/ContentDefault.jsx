import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import Pict from "../../assets/Screenshot 2024-11-06 150517.png";
import { FaCheck, FaCloudUploadAlt } from "react-icons/fa";
import { CgTranscript } from "react-icons/cg";
import { IoText } from "react-icons/io5";

const ContentDefault = () => {
  return (
    <div className="content-default">
      <section className="content-default__section-1">
        <div className="content-default__section-1-content">
          <h1>Welcome to Alih Bahasa</h1>
          <p>
            AI-powered transcription, translation, and summarization platform
          </p>
          <button>Start Trial for Free</button>
        </div>
        <div className="content-default__section-1-image">
          <img src={Pict} alt="ini Image" />
        </div>
      </section>

      <section className="content-default__section-2">
        <h1 className="content-default__section-2-title">What we Provide?</h1>
        <div className="content-default__section-2-content">
          <Card p={"1rem"} width={"md"} textAlign={"center"} boxShadow={"md"}>
            <h1>Transcription</h1>
            <p>
              Automatically transcribes audio and video files into text with
              precision.
            </p>
          </Card>
          <Card p={"1rem"} width={"md"} textAlign={"center"} boxShadow={"md"}>
            <h1>Translation</h1>
            <p>
              Translates the transcribed text into Bahasa Indonesia, preserving
              meaning and nuances.
            </p>
          </Card>
          <Card p={"1rem"} width={"md"} textAlign={"center"} boxShadow={"md"}>
            <h1>Summarization</h1>
            <p>
              Condenses lengthy transcriptions into brief, digestible summaries
              in Bahasa Indonesia.
            </p>
          </Card>
        </div>
      </section>

      <section>
        <Flex flexDir={"column"} p={"5rem"} gap={"1rem"}>
          <Flex justifyContent={"center"}>
            <Heading fontSize={"35px"}>How it Works?</Heading>
          </Flex>

          <Flex
            width="100%"
            flexDirection={"column"}
            p={"1rem"}
            gap={"1.5rem"}
            alignItems={"center"}
          >
            <HStack flexDir={"row"} gap={"1rem"} width={"xl"}>
              <Center p={"1rem"} bg="tomato" color="white">
                <FaCloudUploadAlt />
              </Center>
              <HStack flexDir={"column"} alignItems={"start"}>
                <Heading fontSize={"lg"}>Upload Video</Heading>
                <Text textAlign={"justify"} fontSize={"md"}>
                  Start your journey by uploading your video file directly to
                  AlihBahasa. Whether it’s a meeting recording, lecture,
                  interview, or any other content, our platform supports a wide
                  variety of file formats, ensuring a smooth and secure upload
                  experience. AlihBahasa takes care of your data with advanced
                  encryption, giving you peace of mind as you prepare to unlock
                  valuable insights from your content.
                </Text>
              </HStack>
            </HStack>

            <HStack flexDir={"row"} gap={"1rem"} width={"xl"}>
              <Center p={"1rem"} bg="tomato" color="white">
                <CgTranscript />
              </Center>
              <HStack flexDir={"column"} alignItems={"start"}>
                <Heading fontSize={"lg"}>Transcription</Heading>
                <Text textAlign={"justify"} fontSize={"md"}>
                  Once uploaded, AlihBahasa’s advanced AI engine automatically
                  begins transcribing the spoken words into accurate, readable
                  text. But it doesn’t stop there—our system intelligently
                  translates the transcription into Bahasa Indonesia. This dual
                  function allows users to access and share their content in a
                  language they understand best, enhancing accessibility and
                  utility
                </Text>
              </HStack>
            </HStack>

            <HStack flexDir={"row"} gap={"1rem"} width={"xl"}>
              <Center p={"1rem"} bg="tomato" color="white">
                <IoText />
              </Center>
              <HStack flexDir={"column"} alignItems={"start"}>
                <Heading fontSize={"lg"}>Summarization</Heading>
                <Text textAlign={"justify"} fontSize={"md"}>
                  AlihBahasa delivers more than just transcription; it provides
                  a concise summary of the key points. By condensing lengthy
                  transcriptions into a few impactful sentences, we make it easy
                  for users to grasp the main ideas quickly, without missing
                  important details. This is perfect for busy professionals or
                  anyone needing a fast, insightful overview of their content.
                </Text>
              </HStack>
            </HStack>
          </Flex>
        </Flex>
      </section>

      <section>
        <Flex
          flexDir={"column"}
          p={"5rem"}
          gap={"1rem"}
          backgroundColor="#8BC6EC"
          backgroundImage="linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)"
        >
          <Flex justifyContent={"center"}>
            <Heading fontSize={"35px"}>Plans and Pricing</Heading>
          </Flex>

          <Flex gap={"1rem"}>
            <Card w={"25%"} boxShadow={"lg"}>
              <CardHeader paddingBottom={"0"}>Starter</CardHeader>
              <CardBody paddingTop={".5rem"}>
                <Heading paddingBottom={".5rem"}>Rp 0/video</Heading>
                <Text textAlign={"justify"} paddingBottom={".5rem"}>
                  Get started with your first transcriptions! Perfect for
                  one-time users or those needing quick text outputs. Simple,
                  efficient, and affordable
                </Text>

                <Flex flexDir={"column"} gap={".3rem"}>
                  <Flex flexDir={"row"} gap={".5rem"} alignItems={"center"}>
                    <FaCheck />
                    <Text width={"100%"} textAlign={"justify"}>
                      Transkripsi teks otomatis
                    </Text>
                  </Flex>
                  <Flex flexDir={"row"} gap={".5rem"} alignItems={"center"}>
                    <FaCheck />
                    <Text width={"100%"} textAlign={"justify"}>
                      Unduhan teks standar dalam 24 jam
                    </Text>
                  </Flex>
                  <Flex flexDir={"row"} gap={".5rem"} alignItems={"center"}>
                    <FaCheck />
                    <Text width={"100%"} textAlign={"justify"}>
                      Fitur dasar tanpa koreksi atau penyuntingan teks otomatis
                    </Text>
                  </Flex>
                </Flex>
              </CardBody>
              <CardFooter>
                <Button bg={"black"} color={"white"} _hover={{ bg: "#313644" }}>
                  Get Started for Free
                </Button>
              </CardFooter>
            </Card>

            <Card w={"25%"} boxShadow={"lg"}>
              <CardHeader paddingBottom={"0"}>Basic</CardHeader>
              <CardBody paddingTop={".5rem"}>
                <Heading paddingBottom={".5rem"}>Rp 20.000/bulan</Heading>
                <Text textAlign={"justify"} paddingBottom={".5rem"}>
                  Unlock more with our Basic package. Transcribe, translate, and
                  download in different formats. Ideal for regular content needs
                  at an affordable rate.
                </Text>

                <Flex flexDir={"column"} gap={".3rem"}>
                  <Flex flexDir={"row"} gap={".5rem"} alignItems={"center"}>
                    <FaCheck />
                    <Text width={"100%"} textAlign={"justify"}>
                      Transkripsi teks otomatis
                    </Text>
                  </Flex>
                  <Flex flexDir={"row"} gap={".5rem"} alignItems={"center"}>
                    <FaCheck />
                    <Text width={"100%"} textAlign={"justify"}>
                      Unduhan teks standar dalam 24 jam
                    </Text>
                  </Flex>
                  <Flex flexDir={"row"} gap={".5rem"} alignItems={"center"}>
                    <FaCheck />
                    <Text width={"100%"} textAlign={"justify"}>
                      Fitur dasar tanpa koreksi atau penyuntingan teks otomatis
                    </Text>
                  </Flex>
                  <Flex flexDir={"row"} gap={".5rem"} alignItems={"center"}>
                    <FaCheck />
                    <Text width={"100%"} textAlign={"justify"}>
                      Ringkasan dasar
                    </Text>
                  </Flex>
                  <Flex flexDir={"row"} gap={".5rem"} alignItems={"center"}>
                    <FaCheck />
                    <Text width={"100%"} textAlign={"justify"}>
                      Transkripsi + terjemahan otomatis
                    </Text>
                  </Flex>
                  <Flex flexDir={"row"} gap={".5rem"} alignItems={"center"}>
                    <FaCheck />
                    <Text width={"100%"} textAlign={"justify"}>
                      Unduhan teks dalam format berbeda
                    </Text>
                  </Flex>
                </Flex>
              </CardBody>
              <CardFooter>
                <Button>Buy this plan</Button>
              </CardFooter>
            </Card>

            <Card w={"25%"} boxShadow={"lg"}>
              <CardHeader paddingBottom={"0"}>Advanced</CardHeader>
              <CardBody paddingTop={".5rem"}>
                <Heading paddingBottom={".5rem"}>Rp 75.000/bulan</Heading>
                <Text textAlign={"justify"} paddingBottom={".5rem"}>
                  Advanced features, faster processing, and priority uploads.
                  Perfect for content creators needing reliable results and more
                  insights from each video.
                </Text>

                <Flex flexDir={"column"} gap={".3rem"}>
                  <Flex flexDir={"row"} gap={".5rem"} alignItems={"center"}>
                    <FaCheck />
                    <Text width={"100%"} textAlign={"justify"}>
                      Transkripsi teks otomatis
                    </Text>
                  </Flex>
                  <Flex flexDir={"row"} gap={".5rem"} alignItems={"center"}>
                    <FaCheck />
                    <Text width={"100%"} textAlign={"justify"}>
                      Unduhan teks standar dalam 24 jam
                    </Text>
                  </Flex>
                  <Flex flexDir={"row"} gap={".5rem"} alignItems={"center"}>
                    <FaCheck />
                    <Text width={"100%"} textAlign={"justify"}>
                      Fitur dasar tanpa koreksi atau penyuntingan teks otomatis
                    </Text>
                  </Flex>
                  <Flex flexDir={"row"} gap={".5rem"} alignItems={"center"}>
                    <FaCheck />
                    <Text width={"100%"} textAlign={"justify"}>
                      Transkripsi, terjemahan, dan ringkasan otomatis
                    </Text>
                  </Flex>
                  <Flex flexDir={"row"} gap={".5rem"} alignItems={"center"}>
                    <FaCheck />
                    <Text width={"100%"} textAlign={"justify"}>
                      Analisis teks tambahan
                    </Text>
                  </Flex>
                  <Flex flexDir={"row"} gap={".5rem"} alignItems={"center"}>
                    <FaCheck />
                    <Text width={"100%"} textAlign={"justify"}>
                      Prioritas antrian unggah
                    </Text>
                  </Flex>
                </Flex>
              </CardBody>
              <CardFooter>
                <Button>Buy this plan</Button>
              </CardFooter>
            </Card>

            <Card w={"25%"} boxShadow={"lg"}>
              <CardHeader paddingBottom={"0"}>Premium</CardHeader>
              <CardBody paddingTop={".5rem"}>
                <Heading paddingBottom={".5rem"}>Rp 100.000/bulan</Heading>
                <Text textAlign={"justify"} paddingBottom={".5rem"}>
                  Unlimited access for unlimited possibilities. For power users
                  who need it all—fast, precise, and flexible—without limits.
                </Text>

                <Flex flexDir={"column"} gap={".3rem"}>
                  <Flex flexDir={"row"} gap={".5rem"} alignItems={"center"}>
                    <FaCheck />
                    <Text width={"100%"} textAlign={"justify"}>
                      Transkripsi teks otomatis
                    </Text>
                  </Flex>
                  <Flex flexDir={"row"} gap={".5rem"} alignItems={"center"}>
                    <FaCheck />
                    <Text width={"100%"} textAlign={"justify"}>
                      Unduhan teks standar dalam 24 jam
                    </Text>
                  </Flex>
                  <Flex flexDir={"row"} gap={".5rem"} alignItems={"center"}>
                    <FaCheck />
                    <Text width={"100%"} textAlign={"justify"}>
                      Fitur dasar tanpa koreksi atau penyuntingan teks otomatis
                    </Text>
                  </Flex>
                  <Flex flexDir={"row"} gap={".5rem"} alignItems={"center"}>
                    <FaCheck />
                    <Text width={"100%"} textAlign={"justify"}>
                      Unggah video tanpa batas
                    </Text>
                  </Flex>
                  <Flex flexDir={"row"} gap={".5rem"} alignItems={"center"}>
                    <FaCheck />
                    <Text width={"100%"} textAlign={"justify"}>
                      Koreksi teks otomatis dan penyesuaian terjemahan
                    </Text>
                  </Flex>
                  <Flex flexDir={"row"} gap={".5rem"} alignItems={"center"}>
                    <FaCheck />
                    <Text width={"100%"} textAlign={"justify"}>
                      Unduhan teks dan subtitle
                    </Text>
                  </Flex>
                </Flex>
              </CardBody>
              <CardFooter>
                <Button>Buy this plan</Button>
              </CardFooter>
            </Card>
          </Flex>
        </Flex>
      </section>
      <section>Product's Strength</section>
    </div>
  );
};

export default ContentDefault;

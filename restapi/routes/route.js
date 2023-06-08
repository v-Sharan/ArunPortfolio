import { Router } from "express";
import {
  AcademicsQueries,
  Experience,
  GrantReceived,
  ConsultancyProject,
  PatentFiling,
  Awards,
  AdminstrativeResponsibility,
  RecognizedSupervisor,
  ResearchGuidance,
  CourseCompleted,
  InternationalJournal,
  NationalJournal,
  InternationalConference,
  NationalConference,
  TechnicalPaperReviewer,
  GuestOfHonour,
  GuestLectures,
  OrganizingConference,
  SubjectHandled,
  PublicationsList,
  Links,
  WorkShop,
} from "../utils/queries.js";
import { client } from "../utils/client.js";

const router = Router();

router.get("/academics", async (req, res, next) => {
  const query = AcademicsQueries();
  try {
    const data = await client.fetch(query);
    res.json({ data });
  } catch (error) {
    return next(new HttpError("Could not find records", 500));
  }
});


router.get("/experience", async (req, res, next) => {
  const query = Experience();
  try {
    const data = await client.fetch(query);
    res.json({ data });
  } catch (error) {
    return next(new HttpError("Could not find records", 500));
  }
});

router.get("/grant_received", async (req, res, next) => {
  const query = GrantReceived();
  try {
    const data = await client.fetch(query);
    res.json({ data });
  } catch (error) {
    return next(new HttpError("Could not find records", 500));
  }
});

router.get("/consultancy_project", async (req, res, next) => {
  const query = ConsultancyProject();
  try {
    const data = await client.fetch(query);
    res.json({ data });
  } catch (error) {
    return next(new HttpError("Could not find records", 500));
  }
});

router.get("/patent_filing", async (req, res, next) => {
  const query = PatentFiling();
  try {
    const data = await client.fetch(query);
    res.json({ data });
  } catch (error) {
    return next(new HttpError("Could not find records", 500));
  }
});

router.get("/awards", async (req, res, next) => {
  const query = Awards();
  try {
    const data = await client.fetch(query);
    res.json({ data });
  } catch (error) {
    return next(new HttpError("Could not find records", 500));
  }
});

router.get("/adminstrative", async (req, res, next) => {
  const query = AdminstrativeResponsibility();
  try {
    const data = await client.fetch(query);
    res.json({ data });
  } catch (error) {
    return next(new HttpError("Could not find records", 500));
  }
});

router.get("/recognized", async (req, res, next) => {
  const query = RecognizedSupervisor();
  try {
    const data = await client.fetch(query);
    res.json({ data });
  } catch (error) {
    return next(new HttpError("Could not find records", 500));
  }
});

router.get("/research_guidance", async (req, res, next) => {
  const query = ResearchGuidance();
  try {
    const data = await client.fetch(query);
    res.json({ data });
  } catch (error) {
    return next(new HttpError("Could not find records", 500));
  }
});

router.get("/course", async (req, res, next) => {
  const query = CourseCompleted();
  try {
    const data = await client.fetch(query);
    res.json({ data });
  } catch (error) {
    return next(new HttpError("Could not find records", 500));
  }
});

router.get("/publications", async (req, res, next) => {
  const query = PublicationsList();
  try {
    const data = await client.fetch(query);
    res.json({ data });
  } catch (error) {
    return next(new HttpError("Could not find records", 500));
  }
});

router.get("/links", async (req, res, next) => {
  const query = Links();
  try {
    const data = await client.fetch(query);
    res.json({ data });
  } catch (error) {
    return next(new HttpError("Could not find records", 500));
  }
});

router.get("/international_journal", async (req, res, next) => {
  const query = InternationalJournal();
  try {
    const data = await client.fetch(query);
    res.json({ data });
  } catch (error) {
    return next(new HttpError("Could not find records", 500));
  }
});

router.get("/national_journal", async (req, res, next) => {
  const query = NationalJournal();
  try {
    const data = await client.fetch(query);
    res.json({ data });
  } catch (error) {
    return next(new HttpError("Could not find records", 500));
  }
});

router.get("/international_conference", async (req, res, next) => {
  const query = InternationalConference();
  try {
    const data = await client.fetch(query);
    res.json({ data });
  } catch (error) {
    return next(new HttpError("Could not find records", 500));
  }
});
 
router.get("/national_conference", async (req, res, next) => {
  const query = NationalConference();
  try {
    const data = await client.fetch(query);
    res.json({ data });
  } catch (error) {
    return next(new HttpError("Could not find records", 500));
  }
});
 
router.get("/technical_paper_reviewer", async (req, res, next) => {
  const query = TechnicalPaperReviewer();
  try {
    const data = await client.fetch(query);
    res.json({ data });
  } catch (error) {
    return next(new HttpError("Could not find records", 500));
  }
});
 
router.get("/guest_of_honour", async (req, res, next) => {
  const query = GuestOfHonour();
  try {
    const data = await client.fetch(query);
    res.json({ data });
  } catch (error) {
    return next(new HttpError("Could not find records", 500));
  }
});
 
router.get("/guest_lectures", async (req, res, next) => {
  const query = GuestLectures();
  try {
    const data = await client.fetch(query);
    res.json({ data });
  } catch (error) {
    return next(new HttpError("Could not find records", 500));
  }
});
 
router.get("/workshop", async (req, res, next) => {
  const query = WorkShop();
  try {
    const data = await client.fetch(query);
    res.json({ data });
  } catch (error) {
    return next(new HttpError("Could not find records", 500));
  }
});
 
router.get("/organizing_conference", async (req, res, next) => {
  const query = OrganizingConference();
  try {
    const data = await client.fetch(query);
    res.json({ data });
  } catch (error) {
    return next(new HttpError("Could not find records", 500));
  }
});
 
router.get("/subject_handled", async (req, res, next) => {
  const query = SubjectHandled();
  try {
    const data = await client.fetch(query);
    res.json({ data });
  } catch (error) {
    return next(new HttpError("Could not find records", 500));
  }
});
 

export default router;

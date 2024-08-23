package BrushBazaar.BrushBazaar.controller;

import BrushBazaar.BrushBazaar.dao.FeatureDao;
import BrushBazaar.BrushBazaar.entities.Feature;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/homepage")
public class HomeController {

    @Autowired
    private FeatureDao featureDao;

    @GetMapping("/features")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Feature> getFeatures() {
        return featureDao.getAllFeatures();
    }
}
